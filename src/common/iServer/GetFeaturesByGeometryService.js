﻿/**
 * Class: SuperMap.REST.GetFeaturesByGeometryService
 * 数据集几何查询服务类
 * 查询与指定几何对象符合一定空间关系的矢量要素。
 *
 * Inherits from:
 *  - <SuperMap.REST.GetFeaturesServiceBase>
 */
require('./GetFeaturesServiceBase');
require('./GetFeaturesByGeometryParameters');
var SuperMap = require('../SuperMap');
SuperMap.REST.GetFeaturesByGeometryService = SuperMap.Class(SuperMap.REST.GetFeaturesServiceBase, {

    /**
     * Constructor: SuperMap.REST.GetFeaturesByGeometryService
     * 数据集几何查询服务类构造函数。
     *
     * 例如：
     * (start code)
     * var myService = new SuperMap.REST.GetFeaturesByGeometryService(url, {
     *     eventListeners: {
     *           "processCompleted": getFeatureCompleted, 
     *           "processFailed": getFeatureError
     *           }
     * });
     * function getFeatureCompleted(object){//todo};
     * function getFeatureError(object){//todo}
     * (end)
     *
     * Parameters:
     * url - {String} 数据查询结果资源地址。请求数据服务中数据集查询服务，
     * URL 应为：http://{服务器地址}:{服务端口号}/iserver/services/{数据服务名}/rest/data；
     * 例如："http://localhost:8090/iserver/services/data-jingjin/rest/data"
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * eventListeners - {Object} 需要被注册的监听器对象。
     */
    initialize: function (url, options) {
        SuperMap.REST.GetFeaturesServiceBase.prototype.initialize.apply(this, arguments);
    },

    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。
     */
    destroy: function () {
        SuperMap.REST.GetFeaturesServiceBase.prototype.destroy.apply(this, arguments);
    },

    /**
     * Method: getJsonParameters
     * 将查询参数转化为 JSON 字符串。
     * 在本类中重写此方法，可以实现不同种类的查询（ID, SQL, Buffer, Geometry等）。
     *
     * Parameters:
     * params - {<SuperMap.GetFeaturesByGeometryParameters>}
     *
     * Returns:
     * {Object} 转化后的 JSON 字符串。
     */
    getJsonParameters: function (params) {
        return SuperMap.GetFeaturesByGeometryParameters.toJsonParameters(params);
    },

    CLASS_NAME: "SuperMap.REST.GetFeaturesByGeometryService"
});

module.exports = SuperMap.REST.GetFeaturesByGeometryService;