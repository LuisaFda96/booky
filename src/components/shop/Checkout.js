import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <div className="form-div">
        <form>
          <h1 className="title">Checkout</h1>
          <div className="form-names">
            <div className="form-group col">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                required="required"
                placeholder="Name"
              />
            </div>
            <div className="form-group col">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastname"
                required="required"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              required="required"
              placeholder="Address"
            />
          </div>
          <div class="form-group">
            <label for="companyName">Company Name</label>
            <input
              type="text"
              class="form-control"
              id="companyName"
              placeholder="Company name (optional)"
            />
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <input
              type="text"
              class="form-control"
              id="country"
              required="required"
              placeholder="Country"
            />
          </div>
          <div class="form-group">
            <label for="town">Town</label>
            <input
              type="text"
              class="form-control"
              id="town"
              required="required"
              placeholder="Town"
            />
          </div>
          <div class="form-group">
            <label for="zipCode">ZIP Code</label>
            <input
              type="text"
              class="form-control"
              id="zipCode"
              required="required"
              placeholder="ZIP Code"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              type="phone"
              class="form-control"
              id="phone"
              required="required"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              required="required"
              placeholder="Email"
            />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">
              Subscribe me to the newsletter
            </label>
          </div>
          <button className="button">Shop now
            <Link rel="stylesheet" href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=b0c6bf1ed18df&mfid=1594403004509_b0c6bf1ed18df#/checkout/openButton"/>
            {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="paypal-button" >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
              <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1" />
            </form> */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
