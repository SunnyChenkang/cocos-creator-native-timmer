//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


/**
 * 游戏分区服务接口对象
 */
export default class ZoneClient {
  input: Thrift.TJSONProtocol;
  output: Thrift.TJSONProtocol;
  seqid: number;

  constructor(input: Thrift.TJSONProtocol, output?: Thrift.TJSONProtocol);

  /**
   * 获取所有的PK游戏分区
   * 
   * @return 所有PK游戏分区对象
   *         ```
   *         [EZone1, EZone2, ..., EZoneN]
   *         ```
   */
  listPKZones(): string;

  /**
   * 获取所有的PK游戏分区
   * 
   * @return 所有PK游戏分区对象
   *         ```
   *         [EZone1, EZone2, ..., EZoneN]
   *         ```
   */
  listPKZones(callback: Function): void;

  /**
   * 判断用户是否具有进入进入指定游戏场次的权限
   * 
   * @param zoneId 游戏分区号
   * @parma uid 玩家ID
   * @return 权限判断结果
   * 
   */
  canAccess(zoneId: number, uid: number): string;

  /**
   * 判断用户是否具有进入进入指定游戏场次的权限
   * 
   * @param zoneId 游戏分区号
   * @parma uid 玩家ID
   * @return 权限判断结果
   * 
   */
  canAccess(zoneId: number, uid: number, callback: Function): void;
}
