const MenuItems = ({item}) => {
    const {price,name,recipe,image}=item || {}
    return (
        <div className="flex gap-4">
           <img style={{borderRadius:"0px 220px 220px 220px"}} src={image} className="w-[118px] h-[104px] object-cover" alt="" />
           <div> 
            <h5 className="text-lg">{name}--------------</h5>
            <p className="text-sm text-gray-500 my-1">{recipe}</p>
           </div>
           <p className="text-yellow-500 font-semibold">${price}</p>
        </div>
    )
}
export default MenuItems;