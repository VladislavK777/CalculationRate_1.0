package com.uraltranscom.calculaterate.model.station;

import lombok.*;

/**
 *
 * Класс Дорога
 *
 * @author Vladislav Klochkov
 * @version 1.0
 * @create 24.12.2018
 *
 * 24.12.2018
 *   1. Версия 1.0
 *
 */

@Data
@EqualsAndHashCode
@AllArgsConstructor
public class Road {
    private int idRoad; //Идентификатор дороги
    private String nameRoad; //Название дороги
}