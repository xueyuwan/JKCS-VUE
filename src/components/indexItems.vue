<template>
    <div class="box">
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
         <li>6</li>
         <li>7</li>
         <li>8</li>
    </div>
</template>
<style lang="scss" scoped="" type="text/css">
 .box{
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-flow: row wrap;
    justify-content:space-between;
    li{
         height: 50px;
         border: 1px solid #ddd;
         width: 24%;
    }
 }
</style>
