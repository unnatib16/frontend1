class Cart{
    constructor(){
        if(Cart.instance){
            return Cart.instance;
        }
        this.items=[];
        Cart.instance=this;
    }
}

