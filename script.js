let ulTasks=$("#ulTasks")
let btnAdd=$("#btnAdd")
let btnClear=$("#btnClear")
let inpnewTask=$("#inpnewTask")
let btnSort=$('#btnSort')
let btnCleanup=$("#btnCleanup")
function additem()
{
    let x=inpnewTask.val()
    let listItem=$("<li>",{class:"list-group-item ",text:x})
   ulTasks.append(listItem)
   inpnewTask.val("")
   listItem.click(()=>{
       listItem.toggleClass("done")
   })
}
function sortitem()
{
    $('#ulTasks .done').appendTo(ulTasks);
}
function clearitem(){
$("#ulTasks .done").remove();
}
inpnewTask.keypress(function (e) { 
    if(e.which==13)
    additem();
});
btnAdd.click(()=>{
   additem()
})
btnClear.click(()=>{
    inpnewTask.val("")
})
btnCleanup.click(clearitem)
btnSort.click(sortitem)