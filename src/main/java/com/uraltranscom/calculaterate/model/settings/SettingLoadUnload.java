package com.uraltranscom.calculaterate.model.settings;

import lombok.*;

/**
 * @author vladislav.klochkov
 * @project CalculationRate_1.0
 * @date 16.01.2019
 */

@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class SettingLoadUnload {
    private int id;
    private String name;
    private int value;
}
