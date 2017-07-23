<div class="layer">
    {*<img src="../../assets/activity_01.jpg" alt=""/>*}
    <img src="${require('../../assets/activity_01.jpg')}" alt=""/>
    <div>this is <%= name %> layer</div>
    <% for(var i=0;i<arr.length;i++){ %>
        <%= arr[i] %>
    <% } %>
</div>