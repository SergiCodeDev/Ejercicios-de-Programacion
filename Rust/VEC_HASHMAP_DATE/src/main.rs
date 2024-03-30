// EJERCICIOS DE JAVASCRIPT HACIÉNDOLOS EN RUST

/*
 * Apartado 4
 * Crea un array de números de más de una cifra. Mapea ese array en otro que sea la suma de las cifras de cada número. No puedes usar bucles.
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) la transformas a array de caracteres (que puedes sumar)
 * Imprime el array original y el resultado (ej: [123, 34, 52] -> [6, 7, 7])
 */

fn apartado4() {
    //poner u8 para numeros tan pequeños y sin sinmbolo
    let array_numeros = vec![95, 72, 55, 65, 82, 21];
    //iter() -> &array_numeros
    //map() -> recorre los valores
    //función anónima |valor| {}
    let sumar_numeros: Vec<i32> = array_numeros
        .iter()
        .map(|&numero| {
            //chars() -> iterador (para poder recorrer)
            // map() -> para iterar el chars()
            //to_digit(10) -> convierte un caracter de chars a numero (as i32) para que sea i32 lo que devuelve
            //collect() devuelve un vec! porque se especifico Vec<i32> al definir la variable "desmenuzar"
            let desmenuzar: Vec<i32> = numero
                .to_string()
                .chars()
                .map(|x| x.to_digit(10).unwrap() as i32)
                .collect();
            let suma: i32 = desmenuzar.iter().sum();
            suma
        })
        .collect();

    println!("{:?} -> {:?}", array_numeros, sumar_numeros);
}

/*
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto (debes comprobar
 * si está  primero el producto en el Map para crear el array o añadirle el mensaje)
 * - Recorre el objeto Map mostrando cada producto, y que errores tiene asociados.
 */

use std::collections::HashMap;

fn apartado5() {
    let mensajes = vec![
        vec!["Silla", "ERROR: Stock no coincide"],
        vec!["Mesa", "Pedido de 2 unidades"],
        vec!["Silla", "ERROR: El precio no puede ser menor a 1"],
        vec!["Mesa", "ERROR: No se pueden enviar 0 unidades"],
        vec!["Cama", "ERROR: El fabricante no tiene ese modelo"],
        vec!["Silla", "Se ha borrado el producto de la base de datos"],
        vec!["Mesa", "ERROR: El stock no puede ser negativo"],
    ];

    let mensajes_filtrados = mensajes
        .iter()
        .filter(|mensajes| mensajes[1].starts_with("ERROR"));

    let mut mapa = HashMap::new();

    for mensaje in mensajes_filtrados {
        mapa.entry(mensaje[0]) // entry() devuelve si existe o no
            .or_insert_with(Vec::new) //or_insert_with(Vec::new) si existe devuelve una referencia mutable al valor existente ,
            //si no crea Vec::new y devuelve una referencia mutable al nuevo valor
            .push(mensaje[1]);
    }

    for (key, values) in mapa {
        println!("{key}:");
        for value in values {
            println!("{value}");
        }
    }
}

/*
 * Apartado 6
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

use std::convert::Into;
use std::f64::consts::PI;
// T acepta tipos que se puedan converti a f64 / T puede ser convertido en f64
fn apartado6<T: Into<f64>>(lado1: T, lado2: T, angulo_en_grados: T) {
    // into() -> convierte T (numero) en tipo f64
    let lado1 = lado1.into();
    let lado2 = lado2.into();
    let angulo_en_grados = angulo_en_grados.into();
    let angulo_en_radianes = angulo_en_grados * PI / f64::from(180);
    // (1 as f64)/f64::from(2) dos formas de convertir a f64
    let area = ((1 as f64) / f64::from(2)) * lado1 * lado2 * angulo_en_radianes.sin();
    println!("{area}")
}

/*
 * Apartado 7
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js (obsoleta - https://momentjs.com/docs/#/-project-status/) para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 *
 * Añadido: Usa la Fórmula de Zeller
 */

fn apartado7(fecha: &str) {
    const MESES: [&str; 12] = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const DÍAS_DE_LA_SEMANA: [&str; 7] = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];

    let partes: Vec<&str> = fecha.split("-").collect();
    let año: i32 = partes[0].parse().unwrap();
    let mes: i32 = partes[1].parse().unwrap();
    let día: i32 = partes[2].parse().unwrap();

    // Fórmula de Zeller DÍAS_DE_LA_SEMANA
    let a = (14 - mes) / 12;
    let y = año - a;
    let m = mes + 12 * a - 2;
    let f = (día + y + y / 4 - y / 100 + y / 400 + (31 * m) / 12) % 7;
    // Fórmula de Zeller DÍAS_DE_LA_SEMANA

    println!(
        "{}, {} de {} de {}",
        DÍAS_DE_LA_SEMANA[f as usize],
        día,
        MESES[(mes - 1) as usize],
        año
    )
}

/*
 * Apartado 8
 * Haz lo mismo que en el apartado 7 pero utiliza la API de internacionalización para formatear la fecha (Intl)
 *
 * Añadido:
 * Usa una libreria para hacerlo como:
 *      chrono: https://github.com/chronotope/chrono
 *      time: https://github.com/time-rs/time
 *      icu4x: https://github.com/unicode-org/icu4x
 *      Hifitime: https://github.com/nyx-space/hifitime
 */

extern crate chrono;
use chrono::{Datelike, NaiveDate, Weekday};

fn apartado8(valor: &str) {
    let fecha = NaiveDate::parse_from_str(valor, "%Y-%m-%d").unwrap();
    let dia_semana = match fecha.weekday() {
        Weekday::Mon => "Lunes",
        Weekday::Tue => "Martes",
        Weekday::Wed => "Miércoles",
        Weekday::Thu => "Jueves",
        Weekday::Fri => "Viernes",
        Weekday::Sat => "Sábado",
        Weekday::Sun => "Domingo",
    };

    const MESES: [&str; 12] = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    
    println!(
        "{}, {} de {} de {}",
        dia_semana,
        fecha.day(),
        MESES[(fecha.month() -1) as usize],
        fecha.year()
    );
}


fn main() {
    println!("--------------- APARTADO 4 -----------------");
    apartado4();
    // [95, 72, 55, 65, 82, 21] -> [14, 9, 10, 11, 10, 3]
    println!("--------------- APARTADO 5 -----------------");
    apartado5();
    // Silla:
    // ERROR: Stock no coincide
    // ERROR: El precio no puede ser menor a 1
    // Mesa:
    // ERROR: No se pueden enviar 0 unidades
    // ERROR: El stock no puede ser negativo
    // Cama:
    // ERROR: El fabricante no tiene ese modelo
    println!("--------------- APARTADO 6 -----------------");
    apartado6(7, 8, 30);
    // 13.999999999999998
    println!("--------------- APARTADO 7 -----------------");
    apartado7("2019-02-28");
    apartado7("2024-03-15");
    apartado7("1998-04-01");
    apartado7("2000-07-12");
    // Jueves, 28 de Febrero de 2019
    // Viernes, 15 de Marzo de 2024
    // Miércoles, 1 de Abril de 1998
    // Miércoles, 12 de Julio de 2000
    println!("--------------- APARTADO 8 -----------------");
    apartado8("2019-02-28");
    apartado8("2024-03-15");
    apartado8("1998-04-01");
    apartado8("2000-07-12");
    // Jueves, 28 de Febrero de 2019
    // Viernes, 15 de Marzo de 2024
    // Miércoles, 1 de Abril de 1998
    // Miércoles, 12 de Julio de 2000
}
