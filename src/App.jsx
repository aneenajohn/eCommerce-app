import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const {
          data: { products: dataFromServer }
        } = await axios.get("/api/products");
        console.log(dataFromServer);
        setProductsData(dataFromServer);
      } catch (err) {
        console.error(`Error happened ${err}`);
      }
    })();
  }, []);

  return (
    <div className="App">
      {/* <header className="header">
        <nav className="navbar">
          <a href="index.html" class="nav__logo">
            LangMart
          </a>
          <ul className="nav__menu">
            <li className="nav__item">
              <div className="avatar">
                <img
                  className="avatar__img avatar__img--sm"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8aGhoAAAAVFRUNDQ329vYYGBg0NDRjY2MTExMUFBQQEBAJCQnDw8P8/PwFBQXv7+/g4ODa2tro6OjQ0NCioqJTU1O1tbUlJSWzs7Pm5ua7u7teXl6Tk5OoqKjJycmEhIQ8PDxzc3MuLi5HR0eAgIBsbGw3Nzd4eHiXl5dYWFhOTk5DQ0MnJyeMjIyzAAFhAAALdklEQVR4nO1d2WKDthINA8jGrF7jfcOJHW///3kFJ6kxSBiDZqT03vPQh9YNHCTNPqO3t/8DAYEd3WAHqt9EOqaD2dd2Pjq34st4fIlb59N8u3hfdVW/lxTY/mI09gDAs1zHNE3Gkn84rpX+q9DYXWd91W/YBLZ/jRMirskMPpiT/GfjYxapftNaiN7bLkBHwC0DMwSYL6eq3/dV+G0GnmjpimtpQXh8/0PyJ/qyXqD3QzJZ8I8/spDdA8CL9H5IArRXqt/+OXqfENbid4MHR805Rgm/2vRusODYU81CDPvalN83x62u2mN2geb8UoCzVM2Fh6hdRflVA4OdfhbdzJKwQe+wYKia0SPsbT0FIQaDk06nsbeRdAKz8Ax9FMcMXPkEDaMDX6qZ/WAhe4f+gsGnam4pgi3CDv0FjNQfxmCOSDCheFZNMTihEkzkzVhtEMDeIRM0DNdUSdHGXsEbxVih2zgiIJhs1L2ys/hJQjChuFFE8EpEMJGocyUEJ2QEE4pXBQR7WJYMn+KMnKDtSPMGq4ABucNIJWV+4e6JCS6JCSb79IOUYL9BxLA2RVJ3ceSREzSc2KYjSKko7oA1GUHbMFUwNOjk6YeSJTQM60REkFbXZ0Gl9z+lRkZfgXsmIdhTtEdTwDsFw6OljqGzJ0gUdxUuIc1J3CpQ9nc4+OZp3yoRpGmtTFM8kdMwwGb4JdqkzAPoXFqNMQ6hLEngYYfBg43D3z1gbJe9aWQ3RjQdLEbiWgfmIgcXB9wlNKE1k2oWT68g2iuAnB/+4Gl7iOVLOHsN/N3ijqQ/K4uA5xfCAUVJDWK+7YRrf6+Ke4ehbRubH3DGzX+vC89kMEF7Gj+v5R7RHpig6BjiHvwdz0IERF+/aHTDAe9pCSLuuUe03N7zDDsXZEt4xtmnmAHwgk0KPt7DvjEvmsGdFt7j8gYNsm5KwfNG8Q5iP28WU/gyx6KRimd957+neSGIYBbOfsIQTUHlQ/neFutJGUTFeuoQTYDn9T1N6KvozeAd/8+cXKOJ0K4L5mkHK+sd7HJfE0p+PDjE8fFpZMweznftZflpLqa52BipdMEem1UZJkZz2DEtGJfXbC8BLNeC8hghR+mHSJvHzjnezBX+Mv55K6c0JXb9+YOs1F3wOcIUqdg9yj2KGaJfjv49OiaIN9RdD7Ay24jHEEkh5iOlQobZ5FvYFv257JZwYrF9y2OIJMTzCl/E8DFaJRS4w+yfK1HiPIZIKj8fhRIxfPwSwkLfffY7lKg4HkMkpzQfwhAxfAypWoJ6pv6jrSKWyzyGSIGMqgwfq8GcM/+I5XaE2HogZFh1lx4ejBDzwpemue8lFo+Eu7SqpHmMqZpxNYZCFUcoaapqi8XD70QyJPe9xHqTUFtU1fiPtSiiVErw4E4zS/hYQo1fsNoEDB+/hPB7t7ORwlBc00VoteUtb6FNk/WymCOyVh4OYsk7cxhiWd5574mZgh92M4tdIvYypWNlzTFFhmjeU9EDFv3wbpBBSQi+b/wGmSyBvL2h6D2hecDFKIbwl4vvbksGxzLvtmfA968uZf0GxSI6vChG3tsG8Yv56bgIeGZ7RNvbrz5KnfxiwTxeJCqv8ksj3oPZrEJA3F7NVk8SA6dCwBQvmthnj+qCpBzSdgvRRMR6jFxgr0NRe81JyiKm1/KZGfzilqIAx/2w+Qi7JwxRSEO3GPLGzK4VatqwzKc7DnR29w35iCl61S5tcu2NU6mA3W59KRbViMIiclAUbLhdELzOHNxqk6Bw7k0H8Shy+/9KLCkZKFZ9OR6ayuD2BGBn1jmVeyZSXCgSlEQhV+5xqy9hjuCRTsbcYmTmYjcFD3kf1vO2kjnOzsDvy0GvoH3rFw3h9MuGcB72JFUP2f6HKSwTJjAUt4J+knRAYOs0bzfEfGdAybQwh6Ctu6wbwXStxnBKS9nxi7ASzP/rHSX/A11BwpOID3dHQvAhHEoLklOYolgLTQMLvxTyB8q6ZOnGuHDqBSkIUg7HOKroVm8Rdqu/9S36fUoR2MuAviNfRvi5t1yvl1V9BPLJH80N0u7uliWBeTX/KzD4jVdIYM3l6Ax+zM2wYmyJVu83j5EO7u9bNSpBqTJg0ZTg2ybjcbKKiodwElbz7EG+fKddyUnBnAmZRSjB4M4vB2wqddseaSbSbSSo+nbeq7WeVGh/I6AYume1ZPQ2FxgaTiXpRTA40TKkNG8vii/KKiVd0FfRKytEeQHcJnSo1PTTxp3QupMVAOa3ox6r/HlODlMewdJ6nJfQ44aYw0qjQ7/wJiXLbB3zPZ6dWd4R8ouZhxJgdCRnCnvcTEi1bvvuGWGnhmPZydeI+5qskl8WHASJlNpgGIOuA77PB/MqJpzPpC6jhZQm5E9Xh3MVnRt9CkZ11IAJJ6yw2pK72bxxpRCJH0taRmCIed4VN3FXzYR7CxZNbtH5hQUH1DRvn7sQ1Uy4W8FoQ44eSsr8ATZ/UH7VITTdZlLVaVPEDPmDH+FU0YDqxvVXsXOiCYoOuSI1jKtsn/710mSbOjC+UnSI+yFP3rjPk1urOTRV/SbA7h0/ft+78Ey4J1E4e3IGKQaqmywk+oUIIhNOHIULhrFMlW8d0Dcr37MVmXDBVyjXMmUhfGKnC698E27P2T/20EXwET04IO/VCXdVrKIJN2kh+cAQLnBlzqCSCdfbybtwLQ8GF9z5KX3uXVwsm0WwDzjXWf0C0c34fn+BCbf9lTczAz9ginzJHD+S9uOAJz4hQbabIS/jkB+FG3fT3kei6igsj/8Hoiicv6bLkTL4xBSqoigcaSYfYsz2HL4JRwwXty6RuvKCh6qp6Zrgm3DEqJiargm+CUdNEfVuUr4JR4xQSj5YhKilwWF0PUy3UWDC0cJhqE2dqq5fycI1UCnSX2RVhIO6UbvPri4goYh4b+eUkV4nJ4KFdqllFGugMFKEJxzVH2yUXk+SRdlQmAbQQVn8AmUkB12xZRUgzDdR02MhBJNeuq/uKjIBHMnDouy9JmL0jlCutKEqB34FUqOMaq50fAKZR7HvauD+FuHupQXg5sq6RsshTStquUdvkLRPI90UxR2dixSG6u6sfA4pE4A448T0gWlI0Ptn7XR9FhIus9YhcFGGxldQFC5E0A1h03EuwhsdtUHDRbS1J9h08J9ebi8fjRYxYtoq+zsa3f2m/yk00gKx+vFTO9ZckH6jQepUs9iMCMyt7UXttDZn7qhdjKJyXtJLMOu6GAeNnYpH1JzAGejrF+ZRcxIf74ZMTcHqOVEqB7O9ilpB/sj4M5u05ujdP7RJU7umxjYtXByrNWpUvWnv+j6i5BoXEf6Muv+G8/r8kz/hVtzRiV9mWLxWQmu8HjgN/tYS1ihd0DoOXECd+Rncmc+aot78jOLFGdrCs2rVZfwZo5TBqF6/ie7B/F949bP5HzoUdj+DCccGdYqTju4uPoNLsx6MflteYy8GLLg2rlRY7fXdqg6MpNQKT8Z6cjRhL2vyddqErh1HBmOZ7Xr20NCMI3hfknv1giXTR+YwgDVGmfdko0NTUHr+TBR+KfwRKDdVTTCuqL1dbVAaBXfAGGJfo9Nfg6oDyTzYoF1dmYW93KjYrB2wSMYrfWNFvlktiL/orkVI0V8AWFQkHYC2T3G7TA7+3KNQHwm9zZLySoQs+sMTsthJ6J0X6JdklqK7OANw7/CSQm+zkHULWBNMl8lKQvktVC+jEwLshhRDzaohWK3PDoSS1rLjAey3M2zN/jKm/ke6lg1lT3p12367VHv0ShD5ixHctuzLq8lMN/0/z9f3qSrBWRm9yXqXaOgEnuU6ZhlZxkzHtbz0t5axW0+0XToO+gN/ed3OR+fW2AQhOuPW+TTfXpf+AH3AHhYCO+pPu93eYOXP3ieTyXK5nEzeZ/5q0Ot2p/3I1kAZ/GH8A6cs2RqXRLkoAAAAAElFTkSuQmCC"
                  alt="avatar"
                />
              </div>
            </li>
            <li className="nav__item">
              <a href="/" class="nav__link">
                WishList
              </a>
            </li>
            <li className="nav__item">
              <a href="/" class="nav__link">
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </header> */}

      <h1 className="app-header">shoppinggg</h1>
      <div className="app-body">
        <div className="card-container">
          {productsData ? (
            productsData.map((data) => {
              return (
                <div class="card card--display">
                  <div class="card__thumbnail">
                    <img src={data.image} class="card__img" alt="cardImg" />
                  </div>
                  <div class="card__desc">
                    <h1>
                      <strong>{data.name}</strong>
                    </h1>
                    <div className="star-count">
                      <p class="star-count__star">{data.ratings}</p>
                      <div class="rating">
                        <div class="rating__stars">
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <h2>
                      <strong>{data.price}</strong>
                    </h2>
                    <p class="card__details">{data.offer}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Loading....</div>
          )}
        </div>
      </div>
    </div>
  );
}
