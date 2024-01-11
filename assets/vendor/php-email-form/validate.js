$(".gform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwg8QWLnOGMzSpQhHhUEgZxrHdkp8U6QPWK5qiNTvc3zMRb5u9GkhiNh5NvXHoD4VNHeA/exec",
        data:$(".gform").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})