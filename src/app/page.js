'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/button.js';
import Input from '@/components/input.js';
import styles from '@/app/page.module.css';
import { login, register } from '@/services/auth';

export default function Login() {
  const [type, setType] = useState('password');
  const [registered, setRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleAccess = async () => {
    try {
      await login(email, password)
      router.push('/food')
    } catch (error) {
      console.error(error)
    }
  }

  const handleCreateUser = async () => {
    try {
      await register(username, email, password)
      router.push('/food')
    } catch (error) {
      console.error(error)
    }
  }

  const handleToggle = () => {
    if (type ==='password'){
       setType('text')
    } else {
       setType('password')
    }
 }

  return (
    <div className={styles.content}>
      <Image src={require('@/imgs/assets/bg.jpg')} className={styles.bgImg} alt='what a nice computer' width={1050} />
      <main className={styles.loginCard}>
        <Image src={require('@/imgs/assets/logo.png')} alt={`ORANGE`} width={180} />
        {registered === false ?
          (<>
              <div className={styles.inputs}>
                <Input placeholder={'seunome@email.com'} label={'Email'} icon={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder={'Password'} label={'Password'} icon={'password'} type={type} value={password} onChange={(e) => setPassword(e.target.value)} />
                <div>
                  <input type={'checkbox'} onChange={handleToggle} id={'mostrarSenha'} name={'mostrarSenha'} />
                  <label htmlFor='mostrarSenha'>Mostrar a senha</label>
                </div>
              </div>
              <a href="#" className={styles.accountProblem}>Problemas para acessar sua conta?</a>
              <Button text={'Acessar'} onClick={handleAccess} className={styles.accessButton} />
              <div className={styles.divider}>
                <div className={styles.line}></div>
                <p>ou</p>
                <div className={styles.line}></div>
              </div>
              <Button text='Cadastrar' onClick={() => setRegister(true)} />
              <div className={styles.links}>
                <a href="#">Termos de uso</a>
                <p>•</p>
                <a href="#">Política de Privacidade</a>
              </div>
            </>
          ) : (
            <>
              <div className={styles.inputs}>
                <Input placeholder={'Username'} label={'Username'} value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder={'seunome@email.com'} label={'Email'} icon={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder={'Password'} label={'Password'} icon={'password'} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button text={'Criar Conta'} onClick={handleCreateUser} className={styles.buttonAcessar} />
              <div className={styles.ouDivider}>
                <div className={styles.line}></div>
                <p>ou</p>
                <div className={styles.line}></div>
              </div>
              <Button text='Fazer Login' onClick={() => setRegister(false)} />
              <div className={styles.links}>
                <a href="#">Termos de uso</a>
                <p>•</p>
                <a href="#">Política de Privacidade</a>
              </div>
            </>)}
      </main>
    </div>
  );
}