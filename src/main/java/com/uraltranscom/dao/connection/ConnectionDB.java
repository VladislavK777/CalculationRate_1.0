package com.uraltranscom.dao.connection;

/*
 *
 * Класс соединения с БД
 *
 * @author Vladislav Klochkov
 * @version 2.0
 * @create 25.10.2017
 *
 * 13.11.2017
 *   1. Добавление хранения пароля в ZooKeeper
 *
 */

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ConnectionDB {

    // Подключаем логгер
    private static Logger logger = LoggerFactory.getLogger(ConnectionDB.class);

    private static final String URL = "jdbc:postgresql://localhost:5432/restapi";
    private static final String USER = "postgres";
    private static final String PASS = "root";

    /*private static ZooKeeper zk;
    private static ZkConnector zkc = new ZkConnector();

    // Определяем параметры БД{
    private static final String[] DATA_SOURCE = getDataFromZK();
    private static final String URL = DATA_SOURCE[0];
    private static final String USER = DATA_SOURCE[1];
    private static final String PASS = DATA_SOURCE[2];



    private static String[] getDataFromZK() {
        String[] data = new String[3];
        try {
            zkc.connect("localhost");
            zk = zkc.getZooKeeper();
            try {
                byte[] database = database = zk.getData("/zookeeper/DB_CONNECT/database", false, null);
                byte[] user = user = zk.getData("/zookeeper/DB_CONNECT/user", false, null);
                byte[] password = password = zk.getData("/zookeeper/DB_CONNECT/password", false, null);
                data[0] = new String(database, "UTF-8");
                data[1] = new String(user, "UTF-8");
                data[2] = new String(password, "UTF-8");

            } catch (IOException e) {
                logger.error("Ошибка получения данных из ZooKeeper.");
            }
        } catch (IOException | InterruptedException | KeeperException e) {
            logger.error("Ошибка подключения к ZooKeeper.");
        }
        return data;
    }*/

    public static String getURL() {
        return URL;
    }

    public static String getUSER() {
        return USER;
    }

    public static String getPASS() {
        return PASS;
    }
}
