let elProductTable = document.querySelector(".product-table")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")

let productsList = JSON.parse(localStorage.getItem("products")) || []

// modal start
    elModalWrapper.addEventListener("click", (e) => e.target.id == "wrapper" && elModalWrapper.classList.add("scale-0"))
// modal end

// category part start
let elCategory1 = document.querySelector(".category-1")
let elCategory2 = document.querySelector(".category-2")

elCategory1.addEventListener("click", () => {
    elCategory1.className = "category-1 text-[35px] text-[#009398] leading-[40.64px] pb-[8px] cursor-pointer font-bold border-b-[3px] border-[#009398]"
    elCategory2.className = "category-2 text-[35px] text-[#A6A6A6] leading-[40.64px] pb-[8px] cursor-pointer font-bold border-b-[3px] border-transparent"
})
elCategory2.addEventListener("click", () => {
    elCategory1.className = "category-1 text-[35px] text-[#A6A6A6] leading-[40.64px] pb-[8px] cursor-pointer font-bold border-b-[3px] border-transparent"
    elCategory2.className = "category-2 text-[35px] text-[#009398] leading-[40.64px] pb-[8px] cursor-pointer font-bold border-b-[3px] border-[#009398]"
})

// category part end


// add part start
const handleAddBtnClick = () => {
    elModalWrapper.classList.remove("scale-0")
    elModalWrapper.innerHTML = `
        <form class="add-form w-[915px] rounded-[15px] flex flex-col items-center mx-auto bg-white">
            <label class="inline-block w-full mt-[5px] mb-[20px]">
                <input class="add-choose-img hidden" type="file"/>
                <img class="mx-auto add_img" src="./images/empty.png" alt="Choose img" width="591" height="216"/>
            </label>
            <div class="flex justify-between">
                <div class="w-[49%] space-y-[20px]">
                    <label>
                        <span class="text-[18px] text-[#898989] pl-2 ml-[22px] mb-1">Категории</span>
                        <select name="category_id" class="w-[400px] ml-[25px] border-b-[1px] py-[8px] border-b-[1px] mb-[10px] border-black">
                            <option value="0">Каркасные</option>
                            <option value="1">Надувные</option>
                        </select>
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Стартая цена (сум)</span>
                        <input name="old_price" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Стартая цена" />
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Рамка</span>
                        <input name="frame" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Рамка" />
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Размер (м)</span>
                        <input name="size" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Размер (м)" />
                    </label>
                </div>
                <div class="w-[49%] space-y-[20px]">
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Количество</span>
                        <input name="amount" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Количество"/>
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Цена со скидкой (сум)</span>
                        <input name="discont_price" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Цена со скидкой (сум)"/>
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Глубина(см)</span>
                        <input name="depth" class="w-[400px] py-[15px] text-[18px] ml-[25px] border-b-[1px] py-[8px] border-b-[1px] mb-[10px] border-black" placeholder="Глубина(см)"/>
                    </label>
                    <label>
                        <span class="text-[18px] text-[#898989] pl-2 ml-[22px] mb-1">Статус</span>
                        <select name="status" class="w-[400px] ml-[25px] border-b-[1px] py-[8px] border-b-[1px] mb-[10px] border-black">
                            <option value="0">Рекомендуем</option>
                            <option value="1">Cкидка</option> 
                            <option value="1">Нет в наличии</option> 
                        </select>
                    </label>
                </div>
            </div>
            <button class="add-form w-[237px] h-[47px] bg-[#009398] mt-[5px] mb-[5px] text-white font-normal text-[20px] text-center rounded-[39px]" type="submit">Добавить</button>
        </form>
    `

    let elAddChooseInput = document.querySelector(".add-choose-img")
    let elAddImg = document.querySelector(".add_img")
    elAddChooseInput.addEventListener("change", function(e){
        elAddImg.src = URL.createObjectURL(e.target.files[0]);
    })

    let elAddForm = document.querySelector(".add-form")
    elAddForm.addEventListener("submit", function(e){
        e.preventDefault()
        const data = {
            id:productsList.length ? productsList[productsList.length - 1].id + 1 : 1,
            categoryId:e.target.category_id.value,
            imgUrl:elAddImg.src,
            oldPrice:e.target.old_price.value,
            discountPrice:e.target.discont_price.value,
            amount:e.target.amount.value,
            frame:e.target.frame.value,
            size:e.target.size.value,
            depth:e.target.depth.value,
            status:e.target.status.value,
        }
        productsList.push(data)
        localStorage.setItem("products", JSON.stringify(productsList))
        renderProducts(productsList, elProductTable)
        elModalWrapper.classList.add("scale-0")
    })    
}
// Add part end


// Render Products start
function renderProducts(arr, list){
    list.innerHTML = null
    arr.forEach(item => {
        let elTR = document.createElement("tr")
        elTR.innerHTML = `
            <tr>
                <td class="py-[7px]">
                    <img class="mx-auto" src="${item.imgUrl}" alt="Pool img" width="97" height="55">
                </td>
                <td class="py-[7px] flex flex-col">
                    <span class="before:w-[85px] before:rotate-[5deg] before:mt-[5px] before:h-[2px] before:absolute before:bg-[#FF0000] relative text-[12px] text-slate-300 leading-[13.44px]">${item.oldPrice} сум</span>
                    <strong class="text-[15px] text-black leading-[13.44px]">${item.discont_price}сум</strong>
                </td>
                <td class="py-[7px]">${item.amount}</td>
                <td class="py-[7px]">${item.frame}</td>
                <td class="py-[7px]">${item.size}</td>
                <td class="py-[7px]">${item.depth}</td>
                <td class="py-[20px]">
                    <div class="flex items-center gap-[18px]">
                        <button onclick="handleEditProduct(${item.id})">
                            <img src="./images/edit-img.svg" alt="Edit img" width="16.5" height="16.5">
                        </button>
                        <button onclick="handleDeleteProduct(${item.id})">
                            <img src="./images/delete-img.svg" alt="Delete img" width="16" height="16">
                        </button>
                    </div>
                </td>
            </tr>
        `
        elProductTable.append(elTR)
    });
}
renderProducts(productsList, elProductTable, "0")
// Render Products end

// delete part start
function handleDeleteProduct(id){
    const deleteIndex = productsList.findIndex(item => item.id == id)
    productsList.splice(deleteIndex, 1)
    renderProducts(productsList, elProductTable)
    console.log(deleteIndex);
    
    localStorage.setItem("products", JSON.stringify(productsList))
}
// delete part end

// Edit part start
function handleEditProduct(id){
    elModalWrapper.classList.remove("scale-0")
    let EditProduct = productsList.find(item =>item.id == id)
    elModalInner.innerHTML = `
        <form class="add-form w-[915px] rounded-[15px] flex flex-col items-center mx-auto bg-white">
            <label class="inline-block w-full mt-[5px] mb-[20px]">
                <input class="add-choose-img hidden" type="file"/>
                <img class="error-img mx-auto add_img" src="${EditProduct.imgUrl}" alt="Choose img" width="591" height="216"/>
            </label>
            <div class="flex justify-between">
                <div class="w-[49%] space-y-[20px]">
                    <label>
                        <span class="text-[18px] text-[#898989] pl-2 ml-[22px] mb-1">Категории</span>
                        <select name="category_id" class="w-[400px] ml-[25px] border-b-[1px] py-[8px] border-b-[1px] mb-[10px] border-black">
                            <option ${EditProduct.categoryId == "0" && "selected"} value="0">Каркасные</option>
                            <option ${EditProduct.categoryId == "1" && "selected"} value="1">Надувные</option>
                        </select>
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Стартая цена (сум)</span>
                        <input value=${EditProduct.oldPrice} name="old_price" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Стартая цена" />
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Рамка</span>
                        <input value=${EditProduct.frame} name="frame" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Рамка" />
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Размер (м)</span>
                        <input value=${EditProduct.size} name="size" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Размер (м)" />
                    </label>
                </div>
                <div class="w-[49%] space-y-[20px]">
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Количество</span>
                        <input value=${EditProduct.amount} name="amount" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Количество"/>
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Цена со скидкой (сум)</span>
                        <input value=${EditProduct.discountPrice} name="discont_price" class="w-[400px] py-[15px] ml-[25px] text-[18px] border-b-[1px] mb-[10px] border-black" placeholder="Цена со скидкой (сум)"/>
                    </label>
                    <label>
                        <span class="text-[18px] text-black pl-2 ml-[22px] mb-1">Глубина(см)</span>
                        <input value=${EditProduct.depth} name="depth" class="w-[400px] py-[15px] text-[18px] ml-[25px] border-b-[1px] py-[8px] border-b-[1px] mb-[10px] border-black" placeholder="Глубина(см)"/>
                    </label>
                    <label>
                        <span class="text-[18px] text-[#898989] pl-2 ml-[22px] mb-1">Статус</span>
                        <select name="status" class="w-[400px] ml-[25px] border-b-[1px] py-[8px] border-b-[1px] mb-[10px] border-black">
                            <option ${EditProduct.status == "0" && "selected"} value="0">Рекомендуем</option>
                            <option ${EditProduct.status == "1" && "selected"} value="1">Cкидка</option> 
                            <option ${EditProduct.status == "2" && "selected"} value="1">Нет в наличии</option> 
                        </select>
                    </label>
                </div>
            </div>
            <button class="add-form w-[237px] h-[47px] bg-[#009398] mt-[5px] mb-[5px] text-white font-normal text-[20px] text-center rounded-[39px]" type="submit">Добавить</button>
        </form>
    `
    let elErrorImg = document.querySelector(".error-img")
    elErrorImg.addEventListener("error", function(e){
        e.target.src = ".images/empty-img.png"
    })
}
// Edit part end
