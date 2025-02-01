import "./OOO.css";
import Header from './Header';
import github from './images/github.png';
import linkedIn from './images/linkedin.png';
import youtube from './images/youtube.png';

function OOO() {
    return(
        <div>
            <Header />
            <div className="ooo-container">
                <div className="ooo-content">
                    <h1 className="greeting">Subject: Jen Out of Office</h1>
                    <div className="ooo-text">
                        <h3 className="ooo">
                            Outside of my 40 hours of builds, functions, and dependencies, you can find me at home reading, building something in Minecraft, climbing, playing volleyball, or...creating something!
                            <br /><br />
                            I am a work-in-progress musician and spend most of my free time with FL Studio! Feel free to take a listen below!! 
                            <div>
                            <h3 className="link"> 
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABD0lEQVR4nO2YPQrCMBiGexoP4OQBDFi8gO1odROPIE7i5pHsasV80qUBM1Xv4BhpcahiautPG+v7wAslCeV7SPIValkAAABAU+gOhn3meCfmjpSJ6TrekbljWy+QLqi/UJYn4Y5irUDdxbGC+R+BcLX4SGoXOIe7NHlF5q1ppMB0vlT+dq/8gNRktig891GB7HhZgaQ4EjLNesMLz1UicL/eKIFzyWedQHI0/IDSAu+PSd6cMQKVXuLwV9soMzQWBFzsgPrKEaJr782m1e7c5NXxd99LmUCAsAMSR+ghuMQCXUihjVLTPmRkYCwICEN3gEfyWHdx9CQ8kvp/o1xI22QJHsl4Jw49rQAAAIC/4wLK0iACt6i43QAAAABJRU5ErkJggg==" alt="electronic-music"className="electronic-music"></img>
                                link will be posted soon I promise :D. Currently in progress
                                </h3>
                            </div>
                            My love for design and all things cute most certainly extends outside of computer science. You can find my keyboard build below! 
                            <a href="https://broadleaf-kilogram-08e.notion.site/Keyboard-Specs-e120d983ec334de9be8437b33964b7e7" className="link">
                            <h3 class = "link"> 
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVElEQVR4nO2Vv0oEMRCHB+1ERO0EEVT0jQ7BKyzczHGiYKUTT8gD6M3sioiCPoD/YHuxsBEECws70fMdxEItTm5vXbYSBW+TlXwwkDTDxy+TBMDzPUtmdxC1tBXxC7hIbTOcSQQ1t8BFlJZaN0E5BddYMdGQ0vLYEUTdnAeXCGh7VpHcdOX41hjTZ9sJ6rQ3EhBXFfG5IvlI5IifcD2csCYVrEXjSLKKWi4zqURM3pB4f8HIsBWxRdMcReIj1PyeSXXXF4rCZdzgMbBF0NiZRJLnTIrkGEnmrKWVp1I56Vda7tK37bpOPAUuERBX0yN96PwS4Bqo+Sy9nQguojS3EsFGNA0ugsSviaA5GPizprR12Ha14Eswvrp3rqi0gnls7GMv2OsESzWDRcxdHi9YSIKlm8Gi5q+DF4yLSPBf/cW/5Sf9vWDPE3SlqFSC5GiBxwN2+QQY248jNF5c2wAAAABJRU5ErkJggg==" alt="keyboard" className="keyboard-image"></img> 
                                my keyboard mod 
                                </h3>
                            </a>
                            Feel free to message me on LinkedIn or email, by clicking the icons below, if you ever want to connect about all things computer science, creatives, and more! 
                            <div className="icons">
                                <a href="https://github.com/j3nguyen01">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEvElEQVR4nO1ZW28bRRR2i4oAcZOgPBV+ARISDwj+BZcHEPwEJHjhAZWH9K15qBAgUHFpZpyUtOCQFKrWM46bpHWrNFETQtykCEQuqE4alEuVkjTxXPZDM3Ydu95dr+NdV0j5pJFW3vXM9505c86ZmVhsD3vYQ9NAMvmIYJ1vCEYOC057JafTgpM1waiwjZM1ycmUeWe/SdHX0da2/+ET5+RFyWi74CQvOUUjTXB6SzJyFKkTh1pPPNVxUDISF5wUGiVeK4QUJCfHcS7+fEvIK07eF4yuNku8RggjKypF34uMOMbiBySn34VNXNa2b81Y4ZI/F39CMJJqAXmU1scFM2Y45MfiB1pJXu6IyCCZfLRpATVuk64ciIRJGLW/k+NNkVecfuA2mLpxBc7CX9DT1yAHzzwgqgHCgz9A3xyBszgDNXkZktUaRHHy7q7II9P5nOB02W1w5+4qylASejYH0f996X0CKtsLde081Fi62MxztheCJ4rkL3ZDz08DWpW7ce78A8FchDK6uqsQa+K8q/X6uwDHQQ22NiwJI8gTSsJZWwK277m8U2WBLu2bxqyfOnHIPUkRa72oID1c0XBBpvOlBqxP2739t9PfyruF2HZ1oXJj5Ggw67e17bd1is8CtK4SMpyVRY9IVJ6FvCka6wowVaWPFaB+HUBUUOMZ10i0IyLxWgAB5LCngHQnnM31yAQ4m+uQac+FbGbo0/oCOOlz7yABNdaPqCGvp70FMNpTV4DZeHh1oOemIhegZ2/4JcBcABfyLpWdpfnIBThLc34utBzEhTw2KQTOcj56Act5zxpLcLodQADd9JyB27PRC1ic8VkDZCOIgHnPNWDql4ih56f8csFcXQGSkTHPKPTbUOQC1MSgHcsjD43WnwFGezwtYOogKSJkLyAGuv1m4McgAj7yTmQUemYyMv56Nue7txCMflhXQIF3vOITxorZ2JTEIcNZX4XMnPLLASikT768u2LuQasMnA41pDorC5ADZ3zJC0b+BrCvrgDrRpx+VtXBpSTUyIVinVIqtkTaLOpL1buzRon/ewcql7V9+ZEPXAeVZyHVcVAwslUOn9PDdhdmXEeOpu5HBEjWYd1KXe6FujkCfesPoLDlzbiwBZ3/E/r3UairZyv68T8cMAkM6a4XYo1AMvJVZSfqetpGCWf1NlS2rzrU3Xexq312a+gJraGGfyn9p77V5U77oiHyxVk49XT1oW0CKneluPddzkNkuiErd1Bpak8q6rrN0pwJh4HJC04WkYk/07AAOwucvlO9mBO2Znc271oRamIIMvsTpDmFyGUBUajv+GK7EctDcvrmrsiXRTByrCITQk0MVEUPsxCtqMUZBEVg8oy2x5qFCV2C09OVrmJdqYmMHMSFBKfJ0C5BkEw+Xrp5KUWMBGSmC2q8357O6alhqPGLoQkQjPZgiD4WCvmyCGCfZPSIz2ILSQD5MtLrJ8nI225XSs0KECb7pxJvxVoB/HzyKcno5ybBNCtAmITJyDEMff1kS8hXCRmizwpGPpa8Y06NnA8swHxbYHRBM3rEZP2WE68RAuzHxsarENufQKuz0DoHrRcAmFPce/ZZ60n7znxjvgUe/jXrHvYQ+//jP0ReXoKJqhChAAAAAElFTkSuQmCC" alt="github"></img>
                                </a>
                                <a href="https://www.linkedin.com/in/khue-jen-nguyen-cal/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEklEQVR4nO2ZS0sDMRDH9/up+IGsz27S4mPjQRFBUDzoxYsHT9L66EMFtd3oQdFaCyKoVbGtj1LdkYl0Udt17bbsA/KHoWwS0vnNJJNloyhSUlJSvpauRXp1Rjc5IxXOKLhjpKJrZCOrqT1tOc81EnXPaWplxHHkfeA8oB1N0u7WAcSy8d55zijojMYdZICW/QNASi0DWE2WmVAhTQcgQULiF5/dgFA6AYDO7k1r8Hh5Ae/VKjwW8rA7NeEKhNIJAIw4Ov1dD/mcaA8EQIKEROS/C5+xPRAA6aBnIFPfA4W8iDw6H6g9wINehVJ0ALbVUINhu11/FrM3OmyOqQdgf2wEdI24A7AV7oNmwna7/jSLQmEnAZXbG/io1aD2+iqW4snaKqSiQ7aZ9BRgd2YSqpUyWKl0fQVpFhFZ8iXAy30R7PSQz0Hyj2rmKcB/lV1asFxKngIYhiHWf2ZxDo5XluH+4rzpuOvsgdjovgPIxddhLzoo1jhGOBUZhOLZacO45+KdWdF8BZAcV3+USoQ4nJ9tGFd7e7N8LfEOwDDM/rohTGos3HQsnhH+AgBo6pTdXFwCMJkBU3IJMbmJqaxCXJbRDpTRJOkXB81vw/b/9LcyF2/3IPPVp0WNPjkAIBteO85NI7GWAfBywXvH6ZdpapfiRHi54L3zNKy0I7xcwO/zbu4JXfwXiTmOvJSUlJTilj4BGp6lV3CdqFIAAAAASUVORK5CYII=" alt="linkedin"></img>
                                </a>
                                <a href="mailto:jen.khue.nguyen2001@gmail.com">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVR4nO2YzU7CQBDHe9GHUR/VD9T4ElyZKSRCoAdu3NQjF447FiPdhDZi1kwt0CACbbfbEnaSSTb92P3/Zqa7zTiONWvWrB2F+a3WFQE0BMArAUhCVFodQCZzN3gtbcJVs3kuEJ8E4rd20bjdBeJCADzy2sXFA/RMCadNEIBuIQiOfFXiae0PucRzHXIqqwYQiAu/3b7MDECI91WLp7XfZgYQAG81EK6SLLxkzwBAUCOAWXaAGginlFsASkXD7/dVKKWKokiLh1LGc5afAdddLeR7nhaIkMV73iowpZfQPAjUdLngYKDCIMgtfp7MJVJzlQ6QXrgIxDbxURSZASgKsetdMgWQF2LfO2QSICvEIc+SaYA/O8k/u9Mhz0R1AGCf9npKTiZxhNl5zNdW50idAMKNyH4Mh/FYpN5ZjvneviyQSYCtZRGGKhiPf8V2OrHzmK/xvX2lRHYbzXCQCQ0HGZk+yHSI3wVBZQMc/c8cHfXvNFbnzskBCMRZ1aIpcQHweZJtlbsaZeA6MwC38+rSWnx33Qsnj3GLu2oAAmg4Bdvr3Qqj/6xGo7PcAEsIbnGbLCcB8MWRLyx+85vgLjHvCKX0TQGCZO6b3DVvzZo1a45p+wH8Wf2PNcl82AAAAABJRU5ErkJggg==" alt="apple-mail"></img>
                                </a>
                            </div>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default OOO;