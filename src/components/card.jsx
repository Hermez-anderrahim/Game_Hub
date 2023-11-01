import React from 'react'
import gameImage from "../assets/HumanBody.png"
export const Card = () => {
    return (
        <div className="w-[25rem] h-[34rem] rounded-3xl border-2 border-white">
            <h2 className="text-2xl font-bold text-center pt-3">Title</h2>
            <img src={gameImage} alt="card-image" className="mx-auto mt-3 w-[22em] h-[23rem]" />
            <button className="bg-primary hover:bg-blue-700 text-white  w-[22rem] h-20 text-4xl py-2 text-center rounded-3xl mt-4 mx-auto  font-bold flex gap-3 pl-20 pt-3">play now <svg xmlns="http://www.w3.org/2000/svg" width="53" height="54" viewBox="0 0 53 54" fill="none">
              <path d="M12.2919 48.5632C12.646 48.7476 13.0435 48.832 13.4418 48.8073C13.8402 48.7826 14.2243 48.6497 14.5529 48.423L43.0062 28.6996C43.2969 28.4979 43.5345 28.2287 43.6986 27.915C43.8627 27.6012 43.9484 27.2524 43.9484 26.8982C43.9484 26.5441 43.8627 26.1952 43.6986 25.8815C43.5345 25.5677 43.2969 25.2985 43.0062 25.0968L14.5529 5.37348C14.2245 5.14598 13.8402 5.01277 13.4417 4.98825C13.0431 4.96374 12.6455 5.04886 12.2918 5.2344C11.9381 5.41994 11.6418 5.69883 11.435 6.04087C11.2283 6.38291 11.1189 6.77506 11.1188 7.17487V46.6216C11.1187 47.0216 11.228 47.414 11.4348 47.7563C11.6416 48.0985 11.938 48.3776 12.2919 48.5632Z" fill="white"/>
              </svg></button>
        </div>
    )
}
