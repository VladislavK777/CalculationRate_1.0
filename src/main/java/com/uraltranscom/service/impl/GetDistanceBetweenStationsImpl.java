package com.uraltranscom.service.impl;

import com.uraltranscom.dao.connection.ConnectionDB;
import com.uraltranscom.service.GetDistanceBetweenStations;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.sql.*;

/*
 *
 * Класс получения расстояния между станциями
 *
 * @author Vladislav Klochkov
 * @version 2.0
 * @create 25.10.2017
 *
 */

@Service
public class GetDistanceBetweenStationsImpl extends ConnectionDB implements GetDistanceBetweenStations {

    // Подключаем логгер
    private static Logger logger = LoggerFactory.getLogger(GetDistanceBetweenStationsImpl.class);

    private static Connection connection;
    private static ResultSet resultSet;
    private static CallableStatement callableStatement;

    @Override
    public int getDistanceBetweenStations(String keyOfStationDeparture, String keyOfStationDestination) {
        int distance = 0;
        try {
            // Открываем соединение с БД
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(getURL(), getUSER(), getPASS());
            // Подготавливаем запрос
            callableStatement = connection.prepareCall(" { call getDistance(?,?) } ");

            // Определяем значения параметров
            callableStatement.setString(1, keyOfStationDeparture);
            callableStatement.setString(2, keyOfStationDestination);

            // Выполняем запрос
            resultSet = callableStatement.executeQuery();

            // Вычитываем полученное значение
            while (resultSet.next()) {
                distance = resultSet.getInt(1);
                if (resultSet.wasNull()) {
                    distance = -1;
                }
            }
        } catch (SQLException sqlEx) {
            logger.error("Ошибка запроса " + callableStatement);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            try {
                connection.close();
            } catch (SQLException se) {
                logger.error("Ошибка закрытия соединения");
            }
            try {
                resultSet.close();
            } catch (SQLException se) {
                logger.error("Ошибка закрытия соединения");
            }
            try {
                callableStatement.close();
            } catch (SQLException se) {
                logger.error("Ошибка закрытия соединения");
            }
        }
        return distance;
    }
}
