import React from 'react'
import Buttons from "../Buttons";

const PriceItems = () => {
 const classNamePrice = 'text-black-500 no-underline	transition-shadow outline-none rounded-lg	cursor-pointer inline-block text-center whitespace-nowrap text-base p-2 border border-singupbtnhovercolor m-0 pb-2 pl-4 pr-4 outline-none bg-white text-singupbtn  hover:bg-gray-300 hover:border-transparent hover:text-singupbtnhovercolor'
  return (
    <div>
      <div className="flex aling-center p-1 rounder-xl">
             <div >
              <select aria-label="minimum price filter" data-testid="srp-price-min-select" className={classNamePrice} >
                <option data-idx="0" value="No Min">No Min</option>
                <option data-idx="1" value="$10k">$10k</option>
                <option data-idx="2" value="$20k">$20k</option>
                <option data-idx="3" value="$30k">$30k</option>
                <option data-idx="4" value="$50k">$50k</option>
                <option data-idx="5" value="$100k">$100k</option>
                <option data-idx="6" value="$130k">$130k</option>
                <option data-idx="7" value="$150k">$150k</option>
                <option data-idx="8" value="$200k">$200k</option>
                <option data-idx="9" value="$250k">$250k</option>
                <option data-idx="10" value="$300k">$300k</option>
                <option data-idx="11" value="$350k">$350k</option>
                <option data-idx="12" value="$400k">$400k</option>
                <option data-idx="13" value="$450k">$450k</option>
                <option data-idx="14" value="$500k">$500k</option>
                <option data-idx="15" value="$550k">$550k</option>
                <option data-idx="16" value="$600k">$600k</option>
                <option data-idx="17" value="$650k">$650k</option>
                <option data-idx="18" value="$700k">$700k</option>
                <option data-idx="19" value="$750k">$750k</option>
                <option data-idx="20" value="$800k">$800k</option>
                <option data-idx="21" value="$850k">$850k</option>
                <option data-idx="22" value="$900k">$900k</option>
                <option data-idx="23" value="$950k">$950k</option>
                <option data-idx="24" value="$1m">$1m</option>
                <option data-idx="25" value="$1.1m">$1.1m</option>
                <option data-idx="26" value="$1.2m">$1.2m</option>
                <option data-idx="27" value="$1.25m">$1.25m</option>
                <option data-idx="28" value="$1.4m">$1.4m</option>
                <option data-idx="29" value="$1.5m">$1.5m</option>
                <option data-idx="30" value="$1.6m">$1.6m</option>
                <option data-idx="31" value="$1.7m">$1.7m</option>
                <option data-idx="32" value="$1.75m">$1.75m</option>
                <option data-idx="33" value="$1.8m">$1.8m</option>
                <option data-idx="34" value="$1.9m">$1.9m</option>
                <option data-idx="35" value="$2m">$2m</option>
                <option data-idx="36" value="$2.25m">$2.25m</option>
                <option data-idx="37" value="$2.5m">$2.5m</option>
                <option data-idx="38" value="$2.75m">$2.75m</option>
                <option data-idx="39" value="$3m">$3m</option>
                <option data-idx="40" value="$3.5m">$3.5m</option>
                <option data-idx="41" value="$4m">$4m</option>
                <option data-idx="42" value="$5m">$5m</option>
                <option data-idx="43" value="$10m">$10m</option>
                <option data-idx="44" value="$20m">$20m</option>
              </select>
              </div>
      


        <div className="pl-5 pr-5 pt-2 block">-</div>
             <div>
              <select aria-label="maximum price filter" data-testid="srp-price-max-select" className={classNamePrice}>
                <option data-idx="0" value="No Min">No Max</option>
                <option data-idx="1" value="$10k">$10k</option>
                <option data-idx="2" value="$20k">$20k</option>
                <option data-idx="3" value="$30k">$30k</option>
                <option data-idx="4" value="$50k">$50k</option>
                <option data-idx="5" value="$100k">$100k</option>
                <option data-idx="6" value="$130k">$130k</option>
                <option data-idx="7" value="$150k">$150k</option>
                <option data-idx="8" value="$200k">$200k</option>
                <option data-idx="9" value="$250k">$250k</option>
                <option data-idx="10" value="$300k">$300k</option>
                <option data-idx="11" value="$350k">$350k</option>
                <option data-idx="12" value="$400k">$400k</option>
                <option data-idx="13" value="$450k">$450k</option>
                <option data-idx="14" value="$500k">$500k</option>
                <option data-idx="15" value="$550k">$550k</option>
                <option data-idx="16" value="$600k">$600k</option>
                <option data-idx="17" value="$650k">$650k</option>
                <option data-idx="18" value="$700k">$700k</option>
                <option data-idx="19" value="$750k">$750k</option>
                <option data-idx="20" value="$800k">$800k</option>
                <option data-idx="21" value="$850k">$850k</option>
                <option data-idx="22" value="$900k">$900k</option>
                <option data-idx="23" value="$950k">$950k</option>
                <option data-idx="24" value="$1m">$1m</option>
                <option data-idx="25" value="$1.1m">$1.1m</option>
                <option data-idx="26" value="$1.2m">$1.2m</option>
                <option data-idx="27" value="$1.25m">$1.25m</option>
                <option data-idx="28" value="$1.4m">$1.4m</option>
                <option data-idx="29" value="$1.5m">$1.5m</option>
                <option data-idx="30" value="$1.6m">$1.6m</option>
                <option data-idx="31" value="$1.7m">$1.7m</option>
                <option data-idx="32" value="$1.75m">$1.75m</option>
                <option data-idx="33" value="$1.8m">$1.8m</option>
                <option data-idx="34" value="$1.9m">$1.9m</option>
                <option data-idx="35" value="$2m">$2m</option>
                <option data-idx="36" value="$2.25m">$2.25m</option>
                <option data-idx="37" value="$2.5m">$2.5m</option>
                <option data-idx="38" value="$2.75m">$2.75m</option>
                <option data-idx="39" value="$3m">$3m</option>
                <option data-idx="40" value="$3.5m">$3.5m</option>
                <option data-idx="41" value="$4m">$4m</option>
                <option data-idx="42" value="$5m">$5m</option>
                <option data-idx="43" value="$10m">$10m</option>
                <option data-idx="44" value="$20m">$20m</option>
              </select>
              </div>
      </div>

    </div>
  )
}

export default PriceItems
