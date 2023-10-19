import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard'
import Color from '../components/Color.js'
import Container from '../components/Container'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../features/products/productSlice';

const OurStore = () => {
  const [gird, setGird] = useState(4)
  const dispatch = useDispatch()
  const productState = useSelector((state) => state?.product?.product)

  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])

  const [brand, setBrand] = useState(null)
  const [category, setCategory] = useState(null)
  const [tag, setTag] = useState(null)
  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)
  const [sort, setSort] = useState(null)

  useEffect(() => {
    getProducts();
  }, [sort, brand, category, tag, maxPrice, minPrice])
  const getProducts = () => {
    dispatch(getAllProducts({ sort, brand, category, tag, maxPrice, minPrice }))
  }

  useEffect(() => {
    let newBrands = [];
    let newCategories = [];
    let newTags = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand)
      newCategories.push(element.category)
      newTags.push(element.tags)
    }
    setBrands(newBrands)
    setCategories(newCategories)
    setTags(newTags)
  }, [productState])

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-3">
            <div className='filter-card mb-3'>
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className='ps-0'>
                  {
                    categories && [...new Set(categories)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>

                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title">Shop By Brands</h3>
              <div>
                <ul className='ps-0'>
                  {
                    brands && [...new Set(brands)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setBrand(item)}>
                          {item}
                        </li>

                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title">Filter By </h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      In stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      Out 0f stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <div>
                    <Color />
                  </div>
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="color-1" />
                    <label className="form-check-label" htmlFor="color-1">
                      S (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="color-2" />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title">Products Tag</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">

                  {
                    tags && [...new Set(tags)].map((item, index) => {
                      return (
                        <span key={index} onClick={() => setTag(item)} className="badge bg-light text-secondary rounded-3 py-2 px-3 text-capitalize">
                          {item}
                        </span>

                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphone bulks 10 ps world famous for student
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
                      activeColor="#ffd700"
                    />
                    <b>$300</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphone bulks 10 ps world famous for student
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
                      activeColor="#ffd700"
                    />
                    <b>$300</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-gird mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By:</p>
                  <select
                    name=''
                    defaultValue='manual'
                    className="form-control form-select"
                    id=''
                    onChange={(e) => setSort(e.target.value)}
                  >
                    {/* <option value="manual">Featured</option>
                    <option value="best-selling" >Best Selling</option> */}
                    <option value="title">Alphabetically , A-Z</option>
                    <option value="-title">Alphabetically , Z-A</option>
                    <option value="price">Price , Low to High </option>
                    <option value="-price">Price , High to Low </option>
                    <option value="createdAt">Date , Old to New </option>
                    <option value="-createdAt">Date , New to Old </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex align-items-center gap-10 gard">
                    <img onClick={() => {
                      setGird(3);
                    }} src="images/gr4.svg" alt="gard" className='d-block img-fluid ' />
                    <img onClick={() => {
                      setGird(4);
                    }} src="images/gr3.svg" alt="gard" className='d-block img-fluid ' />
                    <img onClick={() => {
                      setGird(6);
                    }} src="images/gr2.svg" alt="gard" className='d-block img-fluid ' />
                    <img onClick={() => {
                      setGird(12);
                    }} src="images/gr.svg" alt="gard" className='d-block img-fluid ' />
                  </div>
                </div>
              </div>

            </div>
            <div className="products-list pb-5">
              <div className="d-flex flex-wrap gap-10">
                {/* {
                  (() => {
                    if (productState.length !== 0) {
                      return (
                        <ProductCard data={productState ? productState : []} gird={gird} />
                      )
                    } else {
                      return (
                        <p>No Products Available</p>
                      )
                    }
                  })()
                } */}
                {
                  productState && productState.map((item, index) => {
                    return (
                      <ProductCard
                        key={index}
                        id={item?._id}
                        title={item?.title}
                        brand={item?.brand}
                        price={item?.price}
                        totalRating={item?.totalRating}
                        description={item?.description}
                        image={item?.images[0]?.url}
                        gird={gird}
                      />

                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default OurStore