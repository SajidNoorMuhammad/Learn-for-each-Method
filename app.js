const heading = "For Each </br> for each takes function and two parameters <br>"
document.write(heading)

const fruits = ["apple", "mango", "banana", "orange"];
fruits.forEach(function (fruit, index) {
    document.write(index + 1 + ":" + fruit + "</br>")
})

document.write(fruits)