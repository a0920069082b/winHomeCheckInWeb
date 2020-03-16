$(document).ready( function () {
    $("#login_btn").click(function(){
        const account = $('#inputAccount').val();
        const password = $('#inputPassword').val();

        let data = {
            "account_number": account,
            "password": password,
        }

        if (account != "" && password != "") {
            $.ajax({
                type : "POST",
                url  : "http://211.75.191.19:3015/api/Auth/Login",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(response) {
                    Swal.fire({
                        icon: 'success',
                        title: '登入成功'
                    }).then((result) => {
                        location.href = "dashboard.html?page=user";
                    })

                    localStorage["jwtKey"] = response.jwtKey;
                },
                error: function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: error.responseJSON.msg,
                    })
                }
            })
        }    
    })
} );