function postContactToGoogle() {
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var contact_no = $('#contact_no').val();
        var address = $('#address').val();
    var place = $('#place').val();
    


            $.ajax({
                url: "https://docs.google.com/forms/d/1gZs_sRYh4K6fKzDmGNP6Eh3-RA6N6fj_H4cd5MAY4jo/formResponse",
                data: { "entry_1578889809": first_name,
                    "entry_891190864": last_name,  
                     "entry_588966477": email,
            "entry_1049258030" :contact_no,
            "entry_457467596" :address,
            "entry_1675354981" :place },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        //window.location.replace("ThankYou.html");
                        alert("Thank You");
                    },
                    200: function () {
                        //window.location.replace("ThankYou.html");
                        alert("Thank You");
                    }
                }
            });
    }