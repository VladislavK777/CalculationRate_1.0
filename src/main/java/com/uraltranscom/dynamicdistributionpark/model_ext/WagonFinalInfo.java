package com.uraltranscom.dynamicdistributionpark.model_ext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 *
 * Класс для формирвоания итоговой информации для вагона
 *
 * @author Vladislav Klochkov
 * @version 1.0
 * @create 19.07.2018
 *
 * 19.07.2018
 *   1. Версия 1.0
 *
 */

public class WagonFinalInfo {
    // Подключаем логгер
    private static Logger logger = LoggerFactory.getLogger(WagonFinalInfo.class);

    private String numberOfWagon; // Номер вагона
    private List<WagonFinalRouteInfo> listRouteInfo; // Список маршрутов вагона

    public WagonFinalInfo(String numberOfWagon, List<WagonFinalRouteInfo> listRouteInfo) {
        this.numberOfWagon = numberOfWagon;
        this.listRouteInfo = listRouteInfo;
    }

    public WagonFinalInfo(WagonFinalInfo source) {
        setNumberOfWagon(source.getNumberOfWagon());
        setListRouteInfo(source.getListRouteInfo());
    }

    public WagonFinalInfo(Map.Entry<String,WagonFinalInfo> source) {
        setNumberOfWagon(source.getValue().getNumberOfWagon());
        setListRouteInfo(source.getValue().getListRouteInfo());
    }

    public String getNumberOfWagon() {
        return numberOfWagon;
    }

    public void setNumberOfWagon(String numberOfWagon) {
        this.numberOfWagon = numberOfWagon;
    }

    public List<WagonFinalRouteInfo> getListRouteInfo() {
        return listRouteInfo;
    }

    public void setListRouteInfo(List<WagonFinalRouteInfo> listRouteInfo) {
        this.listRouteInfo = listRouteInfo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WagonFinalInfo that = (WagonFinalInfo) o;
        return Objects.equals(numberOfWagon, that.numberOfWagon) &&
                Objects.equals(listRouteInfo, that.listRouteInfo);
    }

    @Override
    public int hashCode() {

        return Objects.hash(numberOfWagon, listRouteInfo);
    }

    @Override
    public String toString() {
        return "WagonFinalInfo{" +
                "numberOfWagon='" + numberOfWagon + '\'' +
                ", listRouteInfo=" + listRouteInfo +
                '}';
    }
}
