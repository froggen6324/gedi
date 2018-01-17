

	$.ajax({
		type:"get",
		url:"http://127.0.0.1/gedi/gedi/data.json?id="+Math.random(),
		success:function(json){
			
			var str ="";
			for(var i in json){
				str += `<div class="pro1">
    			<a href="http://127.0.0.1/gedi/gedi/page.html?pid=${json[i].src}">
	    			<img src="${json[i].src}" alt="" />
	    			<p>${json[i].title}</p>
    			</a>
    			<p>
    				<span class="s1">${json[i].price}</span><span class="s2">总销量:${json[i].sell}</span>
    			</p>
    		</div>`
			}
			$(".pro_show").html(str);
			$(".pro1").css({
				"float":"left",
				"margin":"10px 22px"
			});
		}
	})

