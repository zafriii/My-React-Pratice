import React, { useState } from 'react'
import ProductData from './ProductData'
import styles from './Menu.module.css'
import { IoIosCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";


function Product() {

const [detail, setDetail] = useState([]);

const [close, setClose] = useState(false);

const detailPage = (Product) =>{

    setDetail ([{...Product}])
    setClose (true)
}


  return (
    <>

            {
                close ? 

                <div className={styles.detail_container}>

        <div className={styles.detail_content}>

        <button className={styles.close} onClick={()=>setClose(false)}> <IoIosCloseCircle fontSize={"25px"} /></button>  

                {
                    detail.map((x) =>
                    {
                        return(
                            <>
                            
                            <div className={styles.detail_info}>
                            <div className={styles.detail_img_box}>
                                <img src = {x.img} alt={x.Title}></img>
                            </div>
                            <div className={styles.product_detail}>
                                    <h2>{x.Title}</h2>
                                    <h3>${x.Price}</h3>
                                    <p>{x.Des}</p>
                                    <button>Add to Cart</button>
                            </div>
                            </div>
                            
                            </>
                        )

                    })
                }
            
        </div>

        </div> :null

        }



        <div className={styles.head_section}>
        <h1 className={styles.header}>Choose your favourite Out'Feet</h1>
        <div className={styles.search}>
            <input type="search" placeholder='Search here...' />
            <span><FaSearch fontSize={"24px"} color={"#d01c28"}/></span>
        </div>
        </div>

        <div className={styles.container}>
            {
                ProductData.map((curElm)=>{
                    return(
                        <>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <div className={styles.img_box}>
                                    <img src={curElm.img} alt={curElm.Title}></img>
                                </div>
                                <div className={styles.detail}>
                                    <div className={styles.info}>
                                        <h3>{curElm.Title}</h3>
                                        <p>${curElm.Price}</p>    
                                    </div>
                                    <button  onClick={()=> detailPage (curElm)}>View</button>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }


        </div>


    </>
  )
}

export default Product