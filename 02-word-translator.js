//Author : Ranjitha

//Date: 21-02-2023

//The Word Translator

//Usage: Use simple conditional statements

//Create an application that prompts the user for a language code("es", "de", "en", and "fr").

//If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window.

//If the user enters anything but those four language codes, the application should default to English.The result should be(for example):

//    Hello World translated in French is: Bonjour le monde

let abbr = prompt("Enter a language code to convert Hello worl {es,de,en,and fr}");

if (abbr === "es")
    document.write(" Hello World translated in Spanish is: Hola mundo");
else if (abbr === "de")
    document.write(" Hello World translated in Germany is: Hallo Welt");
else if (abbr === "en")
    document.write(" Hello World translated in English is: Hello World");
else if (abbr === "fr")
    document.write(" Hello World translated in French is: Bonjour le monde");
else
    document.write("Wrong choice");

