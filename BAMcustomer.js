
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "BAM_db"
});

connection.connect(function (err) {
    if (err) throw err;

    startApp();
});


var startApp = function () {
    connection.query("SELECT * FROM products",
        function (err, res) {
            if (err) throw err;
            console.log("");
            for (var i = 0; i < res.length; i++) {
                console.log("ID: " + res[i].id + " || Product: " + res[i].product_name + " || Price: " + res[i].price + " || In Stock: " + res[i].stock_quantity);
            }

            inquirer.prompt([
                {
                    name: "pickID",
                    type: "input",
                    message: "Please enter the ID of the product you are interested in purchasing.",
                    validate: function (val) {
                        if (isNaN(val) === false) {
                            return true;
                        }
                        return false;
                    }
                },
                {
                    name: "amount",
                    type: "input",
                    message: "Please enter the amount of the item you would like to purchase.",
                    validate: function (val) {
                        if (isNaN(val) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ]).then(function (answer) {
                connection.query("SELECT * FROM products WHERE id=?", [answer.pickID],
                    function (err, res) {
                        var useThis = res[0];
                        if (err) throw err;
                        if (res[0].stock_quantity < answer.amount) {
                            console.log("There is not enough of this item in stock to complete your order.");
                            connection.end();
                        }
                        else {
                            connection.query("UPDATE products SET ? WHERE ?",
                                [
                                    {
                                        stock_quantity: res[0].stock_quantity - answer.amount
                                    },
                                    {
                                        id: answer.pickID
                                    }
                                ],
                                function (err) {
                                    if (err) throw err;
                                    var total = useThis.price * answer.amount
                                    console.log("Your order has been completed. Your purchase total is $" + total);
                                    connection.end();
                                }
                            
                            )};

                    });
            });
        });
}
