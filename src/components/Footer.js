import React from 'react'


const Footer = class extends React.Component {
  render() {
    return (
      <>
        <div id="bottom">
          <div class="fbg">
            <div class="fbg_resize">
              <div class="col c1">
                <h2>中心開放時間︰</h2>
                <p>
                  星期一至四：下午七時至十一時<br />
                  星期五　　：下午六時至十一時<br />
                  星期六、日：上午十時至下午十時<br />
                  晚上九時半後請由１期的停車場出入口進出
                </p>
              </div>

              <div class="col c2">
                <h2>聯絡我們：</h2>
                <p>
                  <strong>電話：</strong> 2796 9177<br />
                  <strong>傳真：</strong> 2395 4078<br />
                  <strong>地址︰</strong>
                  官塘工業中心３期４樓Ｊ室（觀塘港鐵站Ｄ４出口）<br />
                  <strong>Address:</strong> Flat J, 4/F, Block 3, Kwun Tong
                  Industrial Centre, 448 - 458 Kwun Tong Road (near D4 exit of
                  Kwun Tong MTR station).<br />
                  <strong>電郵：</strong>
                  <a href="mailto:inquiry@proarchery.com.hk"
                    >inquiry@proarchery.com.hk</a
                  >
                </p>
              </div>

              <div class="col c3">
                <p></p>
                {/* <!--<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="250" height="250" src="https://maps.google.com.hk/maps?hl=en&q=kwun tong industrial centre phase 3&ie=UTF8&t=roadmap&z=17&iwloc=B&output=embed"></iframe>
        --> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.1247845488374!2d114.227508!3d22.31112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d3f850025bb9f81!2sHong%20Kong%20Archery%20Services%20Company%20Limited%20(Pro%20Archery%20by%20HKAS)!5e0!3m2!1sen!2sus!4v1633772475092!5m2!1sen!2sus" width="250" height="250" style={{ border:0,}} allowfullscreen="" loading="lazy"></iframe>

                <p></p>
              </div>

              <div class="clr"></div>
            </div>
          </div>
        </div>

        <div class="footer">
        <div class="footer_resize"></div>
      </div>
      </>
    )
  }
}

export default Footer
