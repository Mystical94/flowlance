
import styles from '@/styles/Home.module.css'
import {useEffect, useState} from 'react'


export default function Home(props) {
  return (
    <main className={styles.home}>
      {/* Logo */}
      <section className={styles.logo}>
        <span className={styles.logo1}>Flowlancer</span>
      </section>

      {/* Hero */}
      <section className={styles.cadre} style={{
        position: props.clientheight >= 6.3 && props.clientheight < 35 ? 'fixed' : 'absolute',
        top: props.clientheight >= 6.3 && props.clientheight < 35  ? '5%' : props.clientheight >= 35 ? '255%' : '50%',
        dislpay: props.clientheight >= 46 ? 'none' : '',
        overflow: 'hidden',
      }}>
        {/* No worrying */}
        <div className={styles.first} style={{
          opacity: props.clientheight >= 6.3 ? `calc(8 - ${props.clientheight})` : '1',
          letterSpacing: props.clientheight >= 6.3 ? `${props.clientheight}px` : 'none',
          display: props.clientheight >= 46 ? 'none' : 'flex',
          gap: props.clientheight >= 6.3 ? `${props.clientheight * 2}%` : '2%' ,
          transition: 'all 500ms ease'
        }}>
          <div style={{
            transform: props.clientheight >= 6.3 && props.clientheight<= 36.3? `translateY(-${props.clientheight * 5.5}%) skew(${props.clientheight * 3.5}deg) translateX(-${props.clientheight}%)` : props.clientheight >= 36.3? `translateY(-${props.clientheight * 10.5}%) skew(${props.clientheight * 3.5}deg) translateX(-${props.clientheight}%) ` : 'none',
            transition: 'all 500ms ease'
          }}>No</div>
          <div style={{
            transform: props.clientheight >= 6.3 && props.clientheight<= 36.3? `translateY(-${props.clientheight * 5.5}%) skew(-${props.clientheight * 3.5}deg) translateX(${props.clientheight * 3}%)` : props.clientheight >= 36.3? `translateY(-${props.clientheight * 10.5}%) skew(-${props.clientheight * 3.5}deg) translateX(${props.clientheight / 2}%) ` : 'none',
            transition: 'all 500ms ease'
          }}>worrying</div>
        </div>
        {/* No stress */}
        <div className={styles.second} style={{
          opacity: props.clientheight >= 18.3 ? `calc(8 - ${props.clientheight})` : '1',
          letterSpacing: props.clientheight >= 18.3 ? `${props.clientheight}px` : 'none',
          display: props.clientheight >= 46 ? 'none' : 'flex',
          gap: props.clientheight >= 18.3 ? `${props.clientheight}%` : '2%' ,
          transform: props.clientheight >= 10.3 ? 'translateY(-130%)' : 'none',
          transition: 'all 500ms ease'
        }}>
          <div style={{
            transform: props.clientheight >= 18.3 && props.clientheight<= 38.3 ? `translateY(-${props.clientheight}%) skew(${props.clientheight * 3.5}deg) translateX(-${props.clientheight}%)` : props.clientheight >= 38.3 ? `translateY(-${props.clientheight}%) skew(${props.clientheight * 3.5}deg) translateX(-${props.clientheight}%) ` : 'none',
            transition: 'all 500ms ease'
          }}>No</div>
          <div style={{
            transform: props.clientheight >= 18.3 && props.clientheight<= 38.3 ? `translateY(-${props.clientheight}%) skew(-${props.clientheight * 3.5}deg) translateX(${props.clientheight * 3}%)` : props.clientheight >= 38.3 ? `translateY(-${props.clientheight}%) skew(-${props.clientheight * 3.5}deg) translateX(${props.clientheight / 2}%) ` : 'none',
            transition: 'all 500ms ease'
          }}>stress</div>
        </div>
        {/* Just $$ */}
        <div className={styles.third} style={{
          opacity: props.clientheight >= 26.3 ? `calc(8 - ${props.clientheight})` : '1',
          letterSpacing: props.clientheight >= 26.3 ? `${props.clientheight}px` : 'none',
          display: props.clientheight >= 46 ? 'none' : 'flex',
          gap: props.clientheight >= 26.3 ? `${props.clientheight}%` : '2%' ,
          transform: props.clientheight >= 10.3 && props.clientheight < 20.3 ? 'translateY(-130%)' : props.clientheight >= 20.3 ? 'translateY(-260%)' : 'none',
          transition: 'all 500ms ease'
        }}>
          <div style={{
            transform: props.clientheight >= 26.3 && props.clientheight<= 38.3 ? `translateY(-${props.clientheight}%) skew(${props.clientheight * 3.5}deg) translateX(-${props.clientheight}%)` : props.clientheight >= 38.3 ? `translateY(-${props.clientheight}%) skew(${props.clientheight * 3.5}deg) translateX(-${props.clientheight}%) ` : 'none',
            transition: 'all 500ms ease'
          }}>Just</div>
          <div style={{
            transform: props.clientheight >= 26.3 && props.clientheight<= 38.3 ? `translateY(-${props.clientheight}%) skew(-${props.clientheight * 3.5}deg) translateX(${props.clientheight * 3}%)` : props.clientheight >= 38.3 ? `translateY(-${props.clientheight}%) skew(-${props.clientheight * 3.5}deg) translateX(${props.clientheight / 2}%) ` : 'none',
            transition: 'all 500ms ease'
          }}>$$</div>
        </div>
        {/* Yes */}
        <div className={styles.forth} style={{
          opacity: props.clientheight >= 29.3 ? `calc(8 - ${props.clientheight})` : '1',
          letterSpacing: props.clientheight >= 29.3 ? `${props.clientheight}px` : 'none',
          display: props.clientheight >= 46 ? 'none' : 'flex',
          gap: props.clientheight >= 29.3 ? `${props.clientheight}%` : '2%' ,
          transform: props.clientheight >= 10.3 && props.clientheight < 20.3 ? 'translateY(-130%)' : props.clientheight >= 20.3 && props.clientheight < 30.3 ? 'translateY(-260%)' : props.clientheight >= 30.3 ? `translateY(-390%) ` : 'none',
          transition: 'all 500ms ease'
        }}>
          Yes
        </div>
        {/* $$$ */}
        <div className={styles.fifth} style={{
          opacity: '1',
          letterSpacing: props.clientheight >= 26.3 ? `${props.clientheight}px` : 'none',
          display: props.clientheight >= 46 ? 'none' : 'flex',
          gap: 'none',
          transform: props.clientheight >= 10.3 && props.clientheight < 20.3 ? 'translateY(-130%)' : props.clientheight >= 20.3 ? 'translateY(-260%)' : 'none',
          transition: 'all 500ms ease'
        }}>
          $$$
        </div>
      </section>
      {/* Flex */}
      <section className={styles.flex} style={{
        display: props.clientheight >= 70 ? 'flex' : 'none',
      }}>
        <div></div>
        <div>
        <div className={styles.flow} style={{
          transform: `rotate(${props.clientheight * 10}deg)`,
          transition: '50ms linear',
        }}></div>
        <div className={styles.flow2}></div>
        </div>
        </section>

      {/* FAQ */}
      <section className={styles.cont}>
        <h1>FAQ</h1>
      <div className={styles.faq}>
        <details>
          <summary>What is Flowlancer for?</summary>
          <div className={styles.answers}>Flowlancer is a platform designed to serve the needs of freelancers by offering tools and features that aim to improve their working experience. The platform focuses on addressing common challenges faced by freelancers and provides specific functionalities to make their work more efficient and secure. Here are some key aspects of what Flowlancer is for:</div>
          <div className={styles.answers}>
            <div className={styles.answers}>1. Invoice Management</div>
            <div className={styles.answers}>2. Client Profile Transparency</div>
            <div className={styles.answers}>3. Blockchain Invoicing</div>
            <div className={styles.answers}>4. Payment Behavior Analysis</div>
          </div>
        </details>
        <details>
          <summary>Why would I use this plateform?</summary>
          <div className={styles.answers}>Why Freelancers find value in using Flowlancer:</div>
          <div className={styles.answers}>
            <div className={styles.answers}>1. Client Transparency: Flowlancer provides freelancers with the ability to access detailed profiles of potential clients.</div>
            <div className={styles.answers}>2. Blockchain Invoicing: The platform facilitates invoicing through the Flow blockchain. </div>
            <div className={styles.answers}>3. Payment Behavior Analysis: Freelancers can assess the payment behavior of clients before accepting a job. </div>
            <div className={styles.answers}>4. Efficient Invoice Management: Flowlancer provides tools for freelancers to manage their invoices effectively.</div>
            <div className={styles.answers}>5. Security and Trust: The use of blockchain technology and the ability to assess a client's payment behavior contribute to a more secure and trustworthy environment for freelancers. </div>
            <div className={styles.answers}>6. Community and Networking: If Flowlancer fosters a community aspect, freelancers may use the platform for networking, collaboration, and the exchange of insights with other professionals in their field.</div>
            <div className={styles.answers}>7. Innovation in Freelancing Practices: The integration of blockchain technology and features for client transparency represents an innovative approach to addressing common challenges in freelancing.</div>
          </div>
        </details>
        <details>
          <summary>Flowlancer Value Propositions</summary>
          <div className={styles.answers}>- Users can check Client's profile they will be working with in advance.</div>
          <div className={styles.answers}>- Users can easily send invoices to their client's on the Flow blockchain.</div>
          <div className={styles.answers}>- Users can check in advance the client's payment behavior to help them decide if working with them will be safe or not.</div>
        </details>
      </div>
      </section>
      
    </main>
  )
}
