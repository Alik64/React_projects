import React from 'react'
import styles from './Form.module.css'
export default function Form() {
    return (
        <div className={styles.wrapper} >

            <form >
                <div>
                    <label htmlFor="chanel">Chanel</label>
                    <input type="text" id="chanel" name="chanel" />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>


                <button>Submit</button>
            </form>


        </div>
    )
}


