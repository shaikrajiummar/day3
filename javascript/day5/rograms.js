for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i >= j) {
            document.writeln("*");
        }

    }
        document.writeln("*");

    document.writeln("<br>");
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == j || i + j == 6) {
        } else {
            document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")

        }
        document.writeln("*");
    }
    document.writeln("<br>");

}


