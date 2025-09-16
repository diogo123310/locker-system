function handleLocker(lockerId) {
    const status = document.getElementById('status')
    status.textContent = `Simulating payment for Locker ${lockerId}...`
  
    setTimeout(() => {
      status.textContent = `Locker ${lockerId} OPENED!`
      console.log(`[SIMULATION] Locker ${lockerId} OPENED`)
    }, 2000)
  }
  