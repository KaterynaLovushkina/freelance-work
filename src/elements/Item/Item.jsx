import React from 'react'

export default function Item({item}) {
  const {img, name, price} = item
  const priceLen = price.length
  const discount = ((parseFloat(price[priceLen-2]) - parseFloat(price[priceLen-1]))*100)/parseFloat(price[priceLen-2])

  return (
    <div className='item' >
           <div className="item-img">
            <img src={img} alt={name} />
            {!isNaN(discount) && <p className='discount'>-{Math.round(discount)}%</p>}
            </div>
            <div className="text">
                <p>{name}</p>
                {priceLen > 1? 
                (
                    <div className="prices">
                        <p className='price last'>{price[priceLen-2]} грн</p>
                        <p className='price'>{price[priceLen-1]} грн</p>
                    </div>
                ):
                (
                    <p className='price'>{price[0]} грн</p>
                )
            }
            </div>
        </div>
  )
}
