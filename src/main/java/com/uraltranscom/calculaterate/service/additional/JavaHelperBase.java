package com.uraltranscom.calculaterate.service.additional;

import com.uraltranscom.calculaterate.util.GetPathSaveFile;
import com.uraltranscom.calculaterate.util.PropertyUtil;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * Класс-помощник содержит основные константы
 *
 * @author Vladislav Klochkov
 * @version 1.0
 * @create 24.12.2018
 *
 * 24.12.2018
 *   1. Версия 1.0
 *
 */

public class JavaHelperBase {
    private static PropertyUtil propertyUtil = new PropertyUtil();

    // Количество дней для погрузки/выгрузки
    public static final int LOADING_WAGON = Integer.parseInt(propertyUtil.getProperty("loadingwagon"));
    public static final int LOADING_2_WAGON = Integer.parseInt(propertyUtil.getProperty("loading2wagon"));
    public static final int UNLOADING_WAGON = Integer.parseInt(propertyUtil.getProperty("unloadingwagon"));

    // Константы для класса преобразования префикла "дней"
    public static final String PREFIX_ONE_DAY = "день";
    public static final String PREFIX_2_4_DAYS = "дня";
    public static final String PREFIX_5_10_DAYS = "дней";

    // Путь к файлу серилизации сохраненных карт расстояний
    public static final String PATH_SAVE_FILE_MAP = GetPathSaveFile.getPathTomcat();

    // Параметры ZooKeeper
    public static final String ZOOKEEPER_HOST = propertyUtil.getProperty("common.zookeeperhost");
    public static final String ZOOKEEPER_SECRET_KEY = propertyUtil.getProperty("common.secretkey");

    // Строка соотношения расстояния ко дням
    public static final String DISTANCE_DAYS = propertyUtil.getProperty("distanceday");

    // Список дорог, с которых расчет идет от станции Отправления
    public static final List<String> LIST_ROADS_WITHOUT_CHECK = Arrays.stream(new String[]{"13", "22", "23", "3", "29", "12", "11", "14", "28", "25"}).collect(Collectors.toList());

    // Список дорог Прибалтики
    public static final List<String> LIST_ROADS_PRIBALT = Arrays.stream(new String[]{"7", "8", "39", "19"}).collect(Collectors.toList());

    // Список станций КБШ не попадающие под общее правило
    public static final List<String> LIST_STATIONS_KBSH_ROAD = Arrays.asList("657907", "645401", "645100", "645505", "645609", "644803");
}
