import Head from "next/head";
import React, { useEffect } from "react";
import { useState } from "react";
import { Checkbox } from "semantic-ui-react";
import styles from './signup.module.css';

const Home = () => {
    const [gender, setGender] = useState(0);
    useEffect(() => {
        console.log(window.innerHeight);
        console.log(window.outerHeight);
    }, [gender])
    return (
        <>
        <Head>
            <title>Wim-Gym | Signup</title>
        </Head>
        <div className={styles.Container}>
            <div className={styles.Head} />
            <div className={styles.MainBox}>
                <p className={styles.Title}>JOIN US</p>
                <div className={styles.SubBox}>
                    <p className={styles.Subtitle}>회원정보를 입력해주세요</p>
                    <div className={styles.ThirdBox}>
                        <div className={styles.Line} style={{ marginTop: 0, border: 'none' }}>
                            <div className={styles.FirstLine}>
                                <div className={styles.Circle1} />
                                <input className={styles.ShortInput} placeholder={'이름'} />
                            </div>
                            <div className={styles.FirstLine} style={{ marginLeft: '4%' }}>
                                <div className={styles.Circle1} />
                                <div>
                                    <p className={styles.GenderText}>성별</p>
                                </div>
                                <div className={styles.CheckArea}>
                                    <Checkbox checked={gender !== 0 && gender % 2 === 1} onClick={() => setGender(1)} />
                                    <p className={styles.Gender}>남자</p>
                                    <Checkbox checked={gender !== 0 && gender % 2 === 0} onClick={() => setGender(2)} />
                                    <p className={styles.Gender}>여자</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Line}>
                            <div className={styles.Circle2} />
                            <input className={styles.Input} placeholder={'주소'} />
                        </div>
                        <div className={styles.Line}>
                            <div className={styles.Circle3} />
                            <input className={styles.Input} placeholder={'전화번호'} />
                        </div>
                        <div className={styles.Line}>
                            <div className={styles.Circle4} />
                            <input className={styles.Input} placeholder={'이메일'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;