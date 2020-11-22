import React from "react";
import logo from "./logo.svg";
import "./App.css";
import classes from "./Listings.module.css";

function Listings ({Data,change,globalState,changeView}) {

       const listingdata =
               Data === undefined || Data.length === 0 ? (
                    <div>Sorry No Data found</div>
               ) : (
                    Data.map((item, pos) => {
                         return (
                              <div className={classes.listed} key={pos}>
                                   <div
                                        className={classes.image}
                                        style={{
                                             backgroundImage: `url(${item.image}),linear-gradient(10deg,rgb(235, 150, 150),rgb(230, 205, 95))`,
                                        }}
                                   >
                                        <span className={classes.address}>
                                             Address {item.address}
                                        </span>
                                        <div className={classes.details}>
                                             <div className={classes.userdata}>
                                                  <img
                                                       className={
                                                            classes.userimg
                                                       }
                                                       src={logo}
                                                       alt="images"
                                                  />
                                                  <div>
                                                       <span
                                                            className={
                                                                 classes.username
                                                            }
                                                       >
                                                            Posted By{" "}
                                                            {item.postedBy}
                                                       </span>
                                                       <br></br>
                                                       <span
                                                            className={
                                                                 classes.date
                                                            }
                                                       >
                                                            Posted on{" "}
                                                            {item.postedOn}
                                                       </span>
                                                  </div>
                                             </div>
                                             <div
                                                  className={
                                                       classes.listingdetails
                                                  }
                                             >
                                                  <div
                                                       className={
                                                            classes.floorspace
                                                       }
                                                  >
                                                       <span>
                                                            Floorspace{" "}
                                                            {item.floorspace} ft
                                                            <sup>2</sup>
                                                       </span>
                                                  </div>
                                                  <div
                                                       className={
                                                            classes.bedrooms
                                                       }
                                                  >
                                                       <i
                                                            className="fa fa-hotel"
                                                            style={{
                                                                 fontSize:
                                                                      "1.3rem",
                                                            }}
                                                       ></i>
                                                       <span>
                                                            {item.rooms}{" "}
                                                            Bedrooms
                                                       </span>
                                                  </div>
                                                  <button
                                                       className={
                                                            classes.button
                                                       }
                                                  >
                                                       View Details
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={classes.bottominfo}>
                                        <span>{item.price}$/month</span>
                                        <span>
                                             Location
                                             <i
                                                  className="fa fa-map-marker"
                                                  style={{
                                                       fontSize: "1.3rem",
                                                       marginRight: "0",
                                                       marginLeft: "0.3rem",
                                                  }}
                                             ></i>
                                             : {item.city},{item.state}
                                        </span>
                                   </div>
                              </div>
                         );
                    })
               );
          return (
               <section className={classes.listings}>
                    <section className={classes.search}>
                         <input
                              type="text"
                              name="search"
                              onChange={change}
                              placeholder="Search Here"
                         />
                    </section>
                    <section className={classes.sort}>
                         <div>{Data.length} results found</div>
                         <div className={classes.sortoptions}>
                              <select
                                   name="sorting"
                                   className={classes.sortby}
                                   onChange={change}
                              >
                                   <option value="All">Sort By</option>
                                   <option value="price-desc">
                                        Highest Price
                                   </option>
                                   <option value="price-asc">
                                        Lowest Price
                                   </option>
                              </select>
                              <div className={classes.view}>
                                   <i
                                        className="fa fa-navicon"
                                        onClick={() =>
                                             changeView("box")
                                        }
                                        // when we wanted to pass data in the props method use it as the arrow function
                                        style={
                                             globalState.view ===
                                             "box"
                                                  ? {
                                                         color: "red",
                                                         fontSize: "1.3rem",
                                                    }
                                                  : {
                                                         color: "black",
                                                         fontSize: "1.3rem",
                                                         textDecoration:
                                                              "line-through",
                                                    }
                                        }
                                   ></i>
                                   <i
                                        className="fa fa-list"
                                        onClick={() =>
                                             changeView("list")
                                        }
                                        style={
                                             globalState.view ===
                                             "list"
                                                  ? {
                                                         color: "red",
                                                         fontSize: "1.3rem",
                                                    }
                                                  : {
                                                         color: "black",
                                                         fontSize: "1.3rem",
                                                         textDecoration:
                                                              "line-through",
                                                    }
                                        }
                                   ></i>
                              </div>
                         </div>
                    </section>
                    <section
                         className={
                              globalState.view === "box"
                                   ? classes.listingdata
                                   : classes.listingdata2
                         }
                    >
                         {listingdata}
                    </section>
               </section>
          );
     }

export default Listings;
