const EventEmitter = require("events");

const store = Object.assign(EventEmitter.prototype, {
    state: {
        name: "",
        age: "",
        sign: "",
        list:[],
        modifyIndex:-1,
        modifyItem:{
            name:"",
            age:"",
            sign:""
        }
    },
    getState() {
        return this.state;
    },
    //双数据绑定
    handleChange(val, type) {
        switch (type) {
            case 1:
                this.state.name = val;
                break;
            case 2:
                this.state.age = val;
                break;
            case 3:
                this.state.sign = val;
                break;
        }
        this.emit("update");
    },
    //更新数据
    handleUpdate(cb){
        this.on("update",cb)
    },
    //添加数据
    handleAddItem(){
        let obj = {};
        obj.name = this.state.name;
        obj.age = this.state.age;
        obj.sign = this.state.sign;

        this.state.list.push(obj);
        this.emit("update");
        this.clearInput();
        
    },
    //修改数据
    handleModifyItem(index){
        this.state.modifyIndex = index;
        let obj = this.state.list[index];
        this.state.modifyItem = {
            name:obj.name,
            age:obj.age,
            sign:obj.sign
        }
        this.emit("update");
    },
    //清除输入框
    clearInput(){
        this.state.name = "";
        this.state.age = "";
        this.state.sign = "";
    },
    //修改输入框的双数据绑定
    handleModifyChange(val,type){
        switch (type) {
            case 1:
                this.state.modifyItem.name = val;
                break;
            case 2:
                this.state.modifyItem.age = val;
                break;
            case 3:
                this.state.modifyItem.sign = val;
                break;
        }
        this.emit("update");
    },
    handleModifySuccess(){
      
        this.state.list.splice(this.state.modifyIndex,1,this.state.modifyItem);
        this.emit("update");

    }

})

export default store;