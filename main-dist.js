$(function(){$(".start").on("click",function(){$(this).addClass("animated rotateOut"),window.setTimeout(function(){$(this).addClass("disappear"),$(".submit-container").addClass("disappear"),$(".questions").addClass("appear")},920)}),$("form").addClass("animated fadeIn"),$("form").on("submit",function(e){e.preventDefault();var a=parseInt($("input[name=questionOne]:checked").val()),t=parseInt($("input[name=questionTwo]:checked").val()),n=parseInt($("input[name=questionThree]:checked").val()),i=parseInt($("input[name=questionFour]:checked").val()),s=parseInt($("input[name=questionFive]:checked").val()),o=a+t+n+i+s;console.log(o),$(this).removeClass("appear");var r="",p="",c="",h="";20>=o?(r="images/evenstevensShia.jpg",p="COMING SOOOOOOOON",c="Even Stevens Shia LaBeouf!",h="Some text that is going to be written later, thank you and have a nice day. Mam."):40>=o&&o>20?(r="images/transformersShia.jpg",p="COMING SOOOOOOOON",c="Transformers Shia LaBeouf!",h="Some text that is going to be written later, thank you and have a nice day. Mam."):60>=o&&o>40?(r="images/justdoitShia.png",p="COMING SOOOOOOOON",c="Just Do It Shia LaBeouf!",h="Some text that is going to be written later, thank you and have a nice day. Mam."):80>=o&&o>60?(r="images/paperbagShia.jpg",p="COMING SOOOOOOOON",c="Paperbag Head Shia LaBeouf!",h="Some text that is going to be written later, thank you and have a nice day. Mam."):(r="images/cannibalShia.jpg",p="COMING SOOOOOOOON",c="Actual Cannibal Shia LaBeouf!",h="Some text that is going to be written later, thank you and have a nice day. Mam.");var u='<img src="'+r+'" alt="'+p+'"><h2>'+c+"</h2><p>"+h+"</p>";$(".shiaSurpriseAnswer").html(u),$(".playAgain-container").toggleClass("disappear"),$(".shiaSurpriseAnswer").toggleClass("disappear")}),$(".playAgain").on("click",function(){console.log("hey"),$("input[name=questionOne]:checked").prop("checked",!1),$("input[name=questionTwo]:checked").prop("checked",!1),$("input[name=questionThree]:checked").prop("checked",!1),$("input[name=questionFour]:checked").prop("checked",!1),$("input[name=questionFive]:checked").prop("checked",!1),$(".playAgain-container").toggleClass("disappear"),$(".shiaSurpriseAnswer").toggleClass("disappear"),$("form").toggleClass("appear")})});
//# sourceMappingURL=main-dist.js.map