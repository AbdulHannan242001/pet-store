import React from "react";

const Category = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 pt-[60px] py-[20px]">
        <div className="text-white flex flex-col gap-[10px] items-center justify-center p-[20px] border border-white/20 rounded-sm">
          <p className="text-gray-300 uppercase text-sm">Pets</p>
        </div>
        <div className="text-white flex flex-col gap-[10px] items-center justify-center p-[20px] border border-white/20 rounded-sm">
          <p className="text-gray-300 uppercase text-sm">Accessories</p>
        </div>
        <div className="text-white flex flex-col gap-[10px] items-center justify-center p-[20px] border border-white/20 rounded-sm">
          <p className="text-gray-300 uppercase text-sm">Food & Treats</p>
        </div>
        <div className="text-white flex flex-col gap-[10px] items-center justify-center p-[20px] border border-white/20 rounded-sm">
          <p className="text-gray-300 uppercase text-sm">Cleaning & Hygiene</p>
        </div>
        <div className="text-white flex flex-col gap-[10px] items-center justify-center p-[20px] border border-white/20 rounded-sm">
          <p className="text-gray-300 uppercase text-sm">Health & Care</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
