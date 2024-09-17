import profileImg from '/profile.jpg'
import houseLayout from '/house-layout.png'
document.querySelector<HTMLDivElement>('#main')!.innerHTML = `
  <h1>TaneHouse</h1>
  
  <h2>House Information</h2>
  <p>This is a shared house in the coastal area in Iwate Japan managed by <a href="https://x.com/mtane0412">@mtane0412</a>. We live in a 60-year-old old private house while renovating it with DIY. People who are geeks of some kind - technology, hunting, DIY, gardening, nature, etc. are welcome.</p>
  
  <h3>Features</h3>
  <ul>
    <li>Fast Internet</li>
    <li>Simple Living Costs</li>
    <li>DIY Facilities</li>
    <li>Local Life</li>
    <li>Owner who is a geek</li>
  </ul>

  <h3>House Layout</h3>
  <img src="${houseLayout}" width="442" height="500" alt="House Layout" />

  <h3>Photos</h3>
  <p>in preparation</p>

  <h2>Residency Requirements</h2>
  <p>
  We are looking for people who can live together with the following conditions:
  <ul>
    <li>Paying rent without delay.</li>
    <li>Can help manage the shared house.</li>
    <li>Keep the common areas clean.</li>
    <li>Do not make loud noises at night.</li>
    <li>Understand that it is an old house.</li>
    <li>Being a geek of some sort (recommended)</li>
    <li>Do not smoke (recommended)</li>
  </ul>
  </p>

  <h2>Rent, Utilities, and Deposit Overview</h2>
  <h3>Rent</h3>
  <table>
    <tr>
      <th>Room Type</th>
      <th>Rent</th>
      <th>Residents</th>
    </tr>
    <tr>
      <td>Private Room</td>
      <td>35,000 yen/month<br>(including 10,000 yen for common service fee)</td>
      <td>2/3</td>
    </tr>
    <tr>
      <td>Domitory</td>
      <td>15,000 yen/month<br>(including 10,000 yen for common service fee)</td>
      <td>0/4</td>
    </tr>
  </table>
  <h3>Common Service</h3>
  <p>
  The common service fee includes the following utilities and services:
  <ul>
    <li>Electricity</li>
    <li>Water</li>
    <li>Gas</li>
    <li>Internet</li>
    <li>Garbage disposal</li>
    <li>Shared items such as toilet paper, detergent, etc.</li>
  </ul>
  </p>
  <h3>Deposit</h3>
  <p>
  A deposit of one month's rent and common service charge is required at the time of moving in.
  The deposit will be returned when you move out except for a cleaning fee of 10,000 yen.
  </p>

  <h2>Owner</h2>
  <img src="${profileImg}" width="500" height="500" alt="Masayuki Tanenobu" />
  <p>
  Hello. I am an otaku who loves the internet and gaming.
  I am from Hiroshima and moved to Iwate in 2017.
  I like shared house culture and wanted to start my own shared house, so I bought an old private house and started a shared house in 2023.
  </p>
  <ul>
    <li>Masayuki Tanenobu @mtane0412</li>
    <li>born on: April 12, 1988</li>
    <li>X: <a href="https://x.com/mtane0412">@mtane0412</a></li>
    <li>Facebook: <a href="https://www.facebook.com/mtane0412">@mtane0412</a></li>
    <li>GitHub: <a href="https://github.com/mtane0412">@mtane0412</a></li>
  </ul>
  
  <h2>Access</h2>
  <p>Shimotateshita 7-38 Sakaricho, Ofunato-shi, Iwate-ken 022-0003 Japan</p>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.30109597054!2d141.71134807608007!3d39.07683887168628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f88a128b6de4431%3A0xaefaa9aee3e3fa5f!2z44CSMDIyLTAwMDMg5bKp5omL55yM5aSn6Ii55rih5biC55ub55S65LiL6IiY5LiL77yX4oiS77yT77yY!5e0!3m2!1sja!2sjp!4v1726566757353!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  <h2>Application</h2>
  <p>If you are interested in living in this house, please contact me via <a href="https://x.com/mtane0412">X DM</a>.</p>

  <footer>
    <p>© 2024 TaneHouse</p>
  </footer>
`