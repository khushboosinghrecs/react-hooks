const reducer = (count, action) =>{
    console.log(count, action, 'in reducer');
    if(action.type =="inc"){
        return count +=1;
    }
    if(action.type =='dec'){
        return count<=0 ? 0: count -=1;
    }
    return count;
}

export default reducer;