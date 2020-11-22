import React,{useEffect} from "react";
import "./App.css";
import classes from "./Filter.module.css";
function Filter ({change,globalState,populateForms,Data}) {
     let city = globalState.populateFormsData.city;
     if (city !== undefined) {
          city = city.map((item) => {
               return (
                    <option value={item} key={item}>
                         {item}
                    </option>
               );
          });
     }
     let HomeType = globalState.populateFormsData.homeType;
     if (HomeType !== undefined) {
          HomeType = HomeType.map((item) => {
               return (
                    <option value={item} key={item}>
                         {item}
                    </option>
               );
          });
     }
     useEffect(()=>{
          populateForms()
     },[])
         
          return (
               <section className={classes.filter}>
                    <h4>Filter By</h4>
                    <div className={classes.sortby}>
                         <select
                              name="city"
                              value={Data.city}
                              onChange={change}
                              className={classes.city}
                         >
                              <option value="All">Select City</option>
                              {city}
                         </select>
                         <select
                              name="HomeType"
                              onChange={change}
                              className={classes.HomeType}
                         >
                              <option value="All">Select Home Type</option>
                              {HomeType}
                         </select>
                    </div>
                    <div className={classes.price}>
                         <span className={classes.title}>Price</span>
                         <input
                              onChange={change}
                              value={globalState.minprice}
                              placeholder="Enter Min Price"
                              type="number"
                              min={1000}
                              name="minprice"
                              className={classes.minprice}
                         />
                         <input
                              onChange={change}
                              value={globalState.maxprice}
                              placeholder="Enter Max Price"
                              type="number"
                              max={1000000}
                              name="maxprice"
                              className={classes.maxprice}
                         />
                    </div>
                    <div className={classes.extras}>
                         <span className={classes.title}>Extras</span>
                         <label>
                              <span>Elevators </span>
                              <input
                                   type="checkbox"
                                   checked={Data.elevators}
                                   name="elevators"
                                   onChange={change}
                              />
                         </label>
                         <label>
                              <span>Swimming pool </span>
                              <input
                                   type="checkbox"
                                   checked={Data.swimmingpool}
                                   name="swimmingpool"
                                   onChange={change}
                              />
                         </label>
                         <label>
                              <span>Finished Basement</span>
                              <input
                                   type="checkbox"
                                   checked={Data.finishedbasement}
                                   name="finishedbasement"
                                   onChange={change}
                              />
                         </label>
                         <label>
                              <span>Gym </span>
                              <input
                                   type="checkbox"
                                   checked={Data.gym}
                                   name="gym"
                                   onChange={change}
                              />
                         </label>
                    </div>
               </section>
          );
     }

export default Filter;
