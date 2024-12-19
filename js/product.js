let elCategory1 = document.querySelector(".category-1")
let elCategory2 = document.querySelector(".category-2")




// let elModalWrapper = document.querySelector(".modal-wrapper")
// let elModalInner = document.querySelector(".modal-inner")
// // modal start
// elModalWrapper.addEventListener("click", (e) =>{
//     e.target.id == "wrapper" && elModalWrapper.classList.add("scale-0")
// })
// // modal end

elCategory1.addEventListener("click", () => {
    elCategory1.className = "category-1 text-[35px] text-[#009398] leading-[40.64px] pb-[8px] cursor-pointer font-bold border-b-[3px] border-[#009398]"
    elCategory2.className = "category-2 text-[35px] text-[#A6A6A6] leading-[40.64px] pb-[8px] cursor-pointer font-bold border-b-[3px] border-transparent"
})
elCategory2.addEventListener("click", () => {
    elCategory1.className = "category-1 text-[35px] text-[#A6A6A6] leading-[40.64px] pb-[8px] cursor-pointer font-bold border-b-[3px] border-transparent"
    elCategory2.className = "category-2 text-[35px] text-[#009398] leading-[40.64px] pb-[8px] cursor-pointer font-bold border-b-[3px] border-[#009398]"
})

// const handleAddBtnClick = () => {
//     elModalWrapper.classList.remove("scale-0")
//     elModalWrapper.innerHTML = `
//         <form class="w-[915px] rounded-[15px] mx-auto bg-white">
//             <label class="inline-block w-full mb-[33px]">
//                 <input class="hidden" type="file"/>
//                 <img class="mx-auto" src="./images/empty.png" alt="Choose img" width="691" height="316"/>
//             </label>
//             <div class="flex justify-between">
//                 <div class="w-[49%] flex flex-col space-y-[20px]">
//                     <label>
//                         <select class="w-[425px] ml-[25px] border-b-[1px] py-[8px] rounded-[5px]>
//                             <option value="0">Каркасные</option>                    
//                             <option value="1">Надувные</option>                    
//                         </select>
//                     </label>
//                 </div>
//                 <div class="w-[49%]"></div>
//             </div>
//         </form>
//     `
// }