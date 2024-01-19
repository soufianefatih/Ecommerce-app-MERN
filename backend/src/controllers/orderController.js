const { Order} = require("../models");
const {categorySchema} = require("../schema");
const AppError = require('../utils/HttpError');
const HttpStatusText = require('../utils/HttpStatusText');






/**-----------------------------------------------
 * @desc    Create new Order
 * @route   /v1/order
 * @method  Create
 * @access  private 
 ------------------------------------------------*/
exports.create = async (req, res, next) => {

   try {

    const {products} = req.body
    const userId = req.user._id
    products.forEach(async(product) => {
     
          const order = new Order({
               user : userId,
               ProductName : product.name,
               qty: product.quantity,
               price: product.price,
               total: product.quantity * product.price,
          });
         
          await order.save()
    });
 
    return res.status(201).json({ status : HttpStatusText.SUCCESS, message: "Order paid successfully" });
    
   } catch (error) {
        const err = new AppError('not found order', 404);
        return next(err);
   }
 
};



/**-----------------------------------------------
 * @desc    Get ALL Order by User
 * @route   /v1/oder
 * @method  all
 * @access  private 
 ------------------------------------------------*/

exports.all = async (req, res,next) => {
  
   const userId = req.user._id
  const result = await Order.find(userId);
  if(!result) {
    const err = new AppError('not found oder', 404);
    return next(err);
  }

 return res.status(201).json({ status : HttpStatusText.SUCCESS, result });
};





/**-----------------------------------------------
 * @desc    delete Order
 * @route   /v1/oder/;id
 * @method  delete
 * @access  private 
 ------------------------------------------------*/

 exports.delete = async (req, res,next) => {
  const _id = req.params.id
  const result = await Order.findByIdAndDelete(_id);
  if(!result) {
    const err = new AppError('not found category', 404);
    return next(err);
  }

 return res.status(201).json({ status : HttpStatusText.SUCCESS, data: null });
};







