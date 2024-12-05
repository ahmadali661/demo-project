import React, { useState } from 'react'

import Head from '../../assests/head.png';
import headSet from '../../assests/headset.jpg';
import airPods from '../../assests/airpods.jpg';
import smartWatch from '../../assests/smart watch.jpg';
import powerBank from '../../assests/power bank.jpg';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <main >

      <header className='header-background'>
        <div className="container">
          <div className="row header-partition-styling d-flex flex-column flex-lg-row align-items-center">
            <div className="col col-12 col-lg-6 text-white dis">
              <h1>E-Commerce</h1>
              <br />
              <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nihil.</p>
              <br />
              <div className='d-flex flex-row'>

                <a href='#about' className='btn btn-outline-secondary rounded-0 me-3'>  READ MORE</a>
                <a href='#items' className='btn btn-secondary rounded-0'>SHOP NOW</a> </div>
            </div>

            <div className="col col-12 col-lg-6 dis">
              <img src={Head} alt="Description" className="me-5" />
            </div>
          </div>
        </div>
      </header>


      <div className="container">
        <div className="row mt-4" id='items'>
          <h1>Categories</h1>
        </div>
        <div className="row cards-align mb-3" >         

          <div className="col-12 col-sm-6 col-md-6 col-lg-3" >
            <div className="card ">
              <img src={headSet} className="card-img-top img-setting" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Wireless Headset</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="products"  className="btn btn-primary">Show More</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3" >
            <div className="card">
              <img src={airPods} className="card-img-top img-setting" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Air Buds</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="products"  className="btn btn-primary">Show More</Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3" >
            <div className="card">
              <img src={smartWatch} className="card-img-top img-setting" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Smart Watch</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="products"  className="btn btn-primary">Show More</Link>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-md-6 col-lg-3" >
            <div className="card">
            {/* <img src="..." class="img-fluid" alt="..."> */}
              <img src={powerBank} className="card-img-top img-setting img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Power Bank</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="products"  className="btn btn-primary">Show More</Link>
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col">
            <h1 id='about' className='mt-4'>Read More:</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia alias saepe iste, eveniet illo aliquid. Iure fugit neque ab? Molestiae ducimus nam, voluptate itaque adipisci sunt, ipsa tempore perferendis et deleniti enim officiis optio eaque laboriosam perspiciatis architecto aliquam, ea porro mollitia. Porro dolorem asperiores sint labore id nostrum iste!</p>
          <h3>Products:</h3>
          <ul>
            <li>Head Phones</li>
            <li>Hand Free</li>
            <li>Air Pods</li>
            <li>Charger</li>
            <li>Wireless Headset</li>
          </ul>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe placeat eius, laudantium aliquid aperiam debitis beatae amet ea, cum doloremque, illo assumenda veniam error tenetur molestiae exercitationem maiores at?</p>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam sit nihil ducimus voluptates eaque totam ea nostrum ipsam deleniti ratione aliquid, quam possimus libero cupiditate accusamus qui doloribus aliquam? Laborum, consequuntur repellendus pariatur tempora minus obcaecati ipsa praesentium vitae impedit assumenda fuga vel, dolores laudantium dicta delectus. Molestiae, nobis!</p>
          <h6 className='text-center'>Thank You!</h6>
          </div>
        </div>
      </div>
    </main>
  )
}

