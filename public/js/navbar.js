function navbar(){
    return `  
    <div id="scartnav">
       
    <ul id="scartulnav">
        <li class="li1"><img class="slogo" src="https://www.lybrate.com/img/Lybrate-Goodkart-Logo.png"></li>
        <li class="li2"><input class="scartinputnav" type="text" placeholder="Search for health Products"></li>
        <li class="li3"><select name="" id="scartselect">
        <option value="">Hello,signin</option>
    </select> 
        
    </li>

        <li class="li4"><img class="scartnavicon" src="https://assets.lybrate.com/q_auto,f_auto,h_20,w_20/imgs/product/d2d/PatientGoldMembership/lybrate_icon_red_large.png" alt=""></li><span class="sspan">LybrateCash</span>
        <li class="li5"><button class="shome"><a href="../snavbar.html">Home</a></button></li>
        <li class="li6"><a href="../cart/cart.html"><img class="cartsymbol" src="data:image/png;base64,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"><a></li>
        
                
    </ul>
</div>
<div id="check">
<div id="tdiv">
    <div id="tdiv2">Shop By Category<i class="fas fa-angle-down " style="font-size: 10px; color: #FFFFFF;"></i>
        <div id="tdiv3" style="height: 250px;">
            <div><i class="fab fa-gratipay"></i>Sexual Wellness</div>
            <hr>
            <div><i class="fas fa-cloud-meatball"></i> Food & Drink</div>
            <hr>
            <div><i class="fas fa-charging-station"></i> Vitamin & Supplement</div>
            <hr>
            <div><i class="fas fa-weight"></i>Weigth Management</div>
            <hr>
            <div><i class="fas fa-child"></i>Child Care</div>
            <hr>
            <div><i class="fas fa-running"></i>Protien & Fitness</div>
            <hr>
            <div><i class="fas fa-allergies"></i>Skin & Health Care</div>
            <hr>
            <div><i class="fas fa-user-check"></i>Personal Care</div>
        </div>
    </div>
    <div id="tdiv2">
        <a>Redeem LybrateCash</a>
    </div>
    <div id="tdiv2">Sexual Wellness<i class="fas fa-angle-down " style="font-size: 10px; color: #FFFFFF;"></i>
        <div id="tdiv3" class="se"  style="height: 70px;">
            <div>Women Sexual Wellness</div>
            <hr>
            <div>Men Performance Enhancer</div>
        </div>
    </div>
    <div id="tdiv2">Food & Drink<i class="fas fa-angle-down " style="font-size: 10px; color: #FFFFFF;"></i>
        <div id="tdiv3" class="se"  style="height: 230px;">
            <div>Healthy BreakFast</div>
            <hr>
            <div>Jams,Honey & Spreads </div>
            <hr>
            <div>Ready to Eat</div>
            <hr>
            <div>Healthy Drinks</div>
            <hr>
            <div>Oil & Ghees</div>
            <hr>
            <div>Snack Foods</div>
            <hr>
            <div>Tea & Coffee</div>
        </div>
    </div>
    <div id="tdiv2">Vitamin & Supplement<i class="fas fa-angle-down " style="font-size: 10px; color: #FFFFFF;"></i>
        <div id="tdiv3" class="se" style="height: 400px;">
            <div><a href="../practise project/liver prod.html">Liver Care</a></div>
            <hr>
            <div><a href="../practise project/multivitanew.html">Multivitamin</a></div>
            <hr>
            <div>Gut Care</div>
            <hr>
            <div>Bones & Joint Care</div>
            <hr>
            <div>Eye Care</div>
            <hr>
            <div>Brain Care</div>
            <hr>
            <div>Hair & Care</div>
            <hr>
            <div>Lung Care</div>
            <hr>
            <div>Menstural Health</div>
            <hr>
            <div>Immunity</div>
            <hr>
            <div>Sleep Aids</div>
            <hr>
            <div>Supplement for Diabetic</div>
        </div>
    </div>
    <div id="tdiv2">Weight Management<i class="fas fa-angle-down " style="font-size: 10px; color: #FFFFFF;"></i>
        <div id="tdiv3" class="se"  style="height: 100px;">
            <div>Drinks For Weight Loss</div>
            <hr>
            <div>Fat Burner</div>
            <hr>
            <div>Meal Replacement</div>
        </div>
    </div>
    <div id="tdiv2">Child Care<i class="fas fa-angle-down " style="font-size: 10px; color: #FFFFFF;"></i>
        <div id="tdiv3" class="se"  style="height: 200px;">
            <div>Child Skin Products</div>
            <hr>
            <div>Child Hair Shampoo</div>
            <hr>
            <div>Child Bath Essentials</div>
            <hr>
            <div>Child Immunity</div>
            <hr>
            <div>Child Snack Food</div>
            <hr>
            <div>Child Multivitamins</div>
        </div>
    </div>
</div>
</div>
`
}
// export default navbar