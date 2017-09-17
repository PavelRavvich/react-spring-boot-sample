package ru.pravvich.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Author : Pavel Ravvich.
 * Created : 16.09.17.
 * <p>
 * Item
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    private int id;
    private String name;
}
