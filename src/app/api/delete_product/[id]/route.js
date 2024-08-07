import "../../../../../libs/config/db";
import { NextResponse } from "next/server";
import ProductModel from "../../../../../libs/models/ProductModel";

export async function DELETE(request, { params }) {
  try {
    const id = params.id;

    const deleteProduct = await ProductModel.findByIdAndDelete(id);
    console.log(deleteProduct);
    if (!deleteProduct) {
      return NextResponse.json({ msg: "DB Error" });
    }

    return NextResponse.json({ msg: "Deleted Successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Something went wrong",
        error,
      },
      { status: 400 }
    );
  }
}
