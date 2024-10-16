let weapon_list = [
  // 撃破
        {
            name:"玉壺青氷",
            lank:"S",
            type:"destroy",
            attackValue:48,
            subStatus:"衝撃力",
            subStatusValue:"7.2%",
            spec:"『通常攻撃』が敵に命中すると、「茶味」を1重獲得する。「茶味」1重につき、装備者の衝撃力+0.7/0.88/1.05/1.22/1.4%、最大30重まで重ね掛け可能、継続時間8秒。継続時間は重ごとに独立してカウントされる。「茶味」獲得時、装備者が持つ「茶味」が15以上の場合、チーム全体の与ダメージ+20/23/26/29/32%、継続時間10秒。同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"拘縛されし者",
            lank:"S",
            type:"destroy",
            attackValue:46,
            subStatus:"衝撃力",
            subStatusValue:"7.2%",
            spec:"攻撃が敵に命中した時、『通常攻撃』による与ダメージとブレイク値+6/7.5/9/10.5/12%、最大5重まで重ね掛け可能、継続時間8秒。1回の攻撃において、1回のみ発動可能。継続時間は重ごとに独立してカウントされる。"
        },
        {
            name:"燃獄ギア",
            lank:"S",
            type:"destroy",
            attackValue:46,
            subStatus:"衝撃力",
            subStatusValue:"7.2%",
            spec:"控えにいる時、装備者のエネルギー自動回復+0.6/0.75/0.9/1.05/1.2Pt/秒。『強化特殊スキル』を発動する度に、装備者の衝撃力+10/12.5/15/17.5/20%、最大2重まで重ね掛け可能、継続時間10秒。継続時間は重ごとに独立してカウントされる。"
        },
        {
            name:"シックスシューター",
            lank:"A",
            type:"destroy",
            attackValue:40,
            subStatus:"衝撃力",
            subStatusValue:"6%",
            spec:"3秒ごとに装備者にパワーを1重与える、最大6重まで重ね掛け可能。『強化特殊スキル』を発動した時、すべてのパワーを消費し、パワー1重につき、スキルの与えるブレイク値+4/4.6/5.2/5.8/6.4%。"
        },
        {
            name:"貴重な石化コア",
            lank:"A",
            type:"destroy",
            attackValue:40,
            subStatus:"衝撃力",
            subStatusValue:"6%",
            spec:"ターゲットのHPが50%以上の時、装備者が与えるブレイク値が10/11.5/13/14.5/16%アップする。ターゲットのHPが75%以上の時、この効果が追加で10/11.5/13/14.5/16%アップする。"
        },
        {
            name:"まな板の鯉",
            lank:"A",
            type:"destroy",
            attackValue:40,
            subStatus:"エネルギー自動回復",
            subStatusValue:"20%",
            spec:"エネルギー値10Ptにつき、装備者の衝撃力が2/2.3/2.6/2.9/3.2%アップする、最大8重まで重ね掛け可能。エネルギーが消費された後でも、効果が8秒持続する。継続時間は重ごとに独立してカウントされる。"
        },
        {
            name:"デマラ式電池Ⅱ型",
            lank:"A",
            type:"destroy",
            attackValue:42,
            subStatus:"衝撃力",
            subStatusValue:"6%",
            spec:"電気属性ダメージが15/17.5/20/22/24%アップする。『回避反撃』または『支援攻撃』が敵に命中した時、装備者のエネルギー獲得効率が18/20.5/23/25/27.5%アップする、継続時間8秒。"
        },
        {
            name:"「激流」-斧型",
            lank:"B",
            type:"destroy",
            attackValue:32,
            subStatus:"エネルギー自動回復",
            subStatusValue:"16%",
            spec:"戦闘突入時、または出場した時、装備者の攻撃力が9/10/11/12/13%アップする、継続時間10秒。20秒毎に1回のみ発動可能。"
        },
        {
            name:"「激流」-矢型",
            lank:"B",
            type:"destroy",
            attackValue:32,
            subStatus:"衝撃力",
            subStatusValue:"4.8%",
            spec:"攻撃が敵に命中すると、装備者がメインターゲットに与えるブレイク値が8/9/10/11/12%アップする。"
        },
        {
            name:"「激流」-銃型",
            lank:"B",
            type:"destroy",
            attackValue:32,
            subStatus:"攻撃力%",
            subStatusValue:"6%",
            spec:"『強化特殊スキル』が与えるブレイク値が10/11.5/13/14.5/16%アップする。"
        },
//強攻
        {
            name:"サプレッサーVI型",
            lank:"S",
            type:"forceful",
            attackValue:48,
            subStatus:"会心ダメージ",
            subStatusValue:"19.2%",
            spec:"会心率+15%。『強化特殊スキル』を発動した時、装備者にパワーを8重与える、最大8重まで重ね掛け可能。『通常攻撃』でエーテル属性ダメージを与えた時、パワーを1重消費し、その攻撃の与ダメージ+35%。"
        },
        {
            name:"ディープシー・ビジター",
            lank:"S",
            type:"forceful",
            attackValue:48,
            subStatus:"会心率",
            subStatusValue:"9.6%",
            spec:"氷属性ダメージ+25/31.5/38/44.5/50%。『通常攻撃』が敵に命中した時、装備者の会心率+10/12.5/15/17.5/20%、継続時間8秒。『ダッシュ攻撃』で氷属性ダメージを与えた時、装備者の会心率が追加で+10/12.5/15/17.5/20%、継続時間15秒、継続時間はバフ効果ごとに独立してカウントされる。"
        },
        {
            name:"ブリムストーン",
            lank:"S",
            type:"forceful",
            attackValue:46,
            subStatus:"攻撃力",
            subStatusValue:"12%",
            spec:"『通常攻撃』、『ダッシュ攻撃』または『回避反撃』が敵に命中すると、装備者の攻撃力+3.5/4.4/5.2/6/7%、最大8重まで重ね掛け可能、継続時間8秒。0.5秒に1回のみ発動可能、継続時間は重ごとに独立してカウントされる。"
        },
        {
            name:"鋼の肉球",
            lank:"S",
            type:"forceful",
            attackValue:46,
            subStatus:"会心率",
            subStatusValue:"9.6%",
            spec:"物理属性ダメージ+20/25/30/35/40%。敵を背後から攻撃し、なおかつ命中した時、装備者の与ダメージ+25/31.5/38/44/50%。"
        },
        {
            name:"金メッキの花信",
            lank:"A",
            type:"forceful",
            attackValue:40,
            subStatus:"攻撃力",
            subStatusValue:"10%",
            spec:"攻撃力+6/6.9/7.8/8.7/9.6%、『強化特殊スキル』の与ダメージ+15/17.2/19.5/21.8/24%。"
        },
        {
            name:"キャノンローラー",
            lank:"A",
            type:"forceful",
            attackValue:40,
            subStatus:"会心率",
            subStatusValue:"8%",
            spec:"攻撃力+7.5%。攻撃が敵に命中し、なおかつ会心が出た時、攻撃力200%分のダメージを追加で与える、8秒に1回のみ発動可能。"
        },
        {
            name:"ドリルリグ-レッドシャフト",
            lank:"A",
            type:"forceful",
            attackValue:42,
            subStatus:"会心ダメージ",
            subStatusValue:"16%",
            spec:"『強化特殊スキル』を発動した時、『通常攻撃』と『ダッシュ攻撃』による電気属性ダメージが50/57.5/65/72.5/80%アップする、継続時間10秒。15秒毎に1回のみ発動可能。"
        },
        {
            name:"なんちゃってスターライトエンジン",
            lank:"A",
            type:"forceful",
            attackValue:42,
            subStatus:"会心率",
            subStatusValue:"8%",
            spec:"『通常攻撃』または『ダッシュ攻撃』が6メートル以上離れた敵に命中すると、装備者がターゲットに与える物理属性ダメージが36/41/46.5/52/57.5%アップする、継続時間8秒。"
        },
        {
            name:"ハウスキーパー",
            lank:"A",
            type:"forceful",
            attackValue:42,
            subStatus:"会心ダメージ",
            subStatusValue:"16%",
            spec:"控えにいる時、1秒ごとのエネルギー回復が0.45/0.52/0.58/0.65/0.72Ptアップする。『強化特殊スキル』が敵に命中すると、装備者の物理属性ダメージが3/3.5/4/4.4/4.8%アップする、最大15重まで重ね掛け可能、継続時間1秒。重ね掛けすると継続時間が更新される。"
        },
        {
            name:"スターライトエンジン",
            lank:"A",
            type:"forceful",
            attackValue:40,
            subStatus:"攻撃力%",
            subStatusValue:"10%",
            spec:"『支援攻撃』を発動した時、装備者の攻撃力が16/18.5/21/23.5/25%アップする、継続時間12秒。"
        },
        {
            name:"ストリートスター",
            lank:"A",
            type:"forceful",
            attackValue:40,
            subStatus:"攻撃力%",
            subStatusValue:"10%",
            spec:"任意のメンバーが『連携スキル』を発動する度に、装備者にパワーを1重与える、最大3重まで重ね掛け可能。『終結スキル』を発動した時、すべてのパワーを消費し、パワー1重につき、スキルの与ダメージが15/17.2/19.5/21.7/24%アップする。"
        },
        {
            name:"「月相」-朔",
            lank:"B",
            type:"forceful",
            attackValue:32,
            subStatus:"会心率",
            subStatusValue:"6.4%",
            spec:"『強化特殊スキル』発動時、装備者のエネルギーが3/3.5/4/4.5/5Pt回復する、12秒に1回のみ発動可能。"
        },
        {
            name:"「月相」-晦",
            lank:"B",
            type:"forceful",
            attackValue:32,
            subStatus:"攻撃力%",
            subStatusValue:"8%",
            spec:"『連携スキル』または『終結スキル』を発動すると、装備者の与ダメージが15/17.5/20/22.5/25%アップする。継続時間6秒。"
        },
        {
            name:"「月相」-望",
            lank:"B",
            type:"forceful",
            attackValue:32,
            subStatus:"攻撃力%",
            subStatusValue:"8%",
            spec:"『通常攻撃』、『ダッシュ攻撃』、『回避反撃』の与ダメージが12/14/16/18/20%アップする。"
        },
// 異常
        {
            name:"バーニングシェイカー",
            lank:"S",
            type:"abnormal",
            attackValue:48,
            subStatus:"攻撃力％",
            subStatusValue:"12％",
            spec:"控えにいる時、装備者のエネルギー自動回復+0.6~1.2Pt/秒。『強化特殊スキル』または『支援攻撃』が敵に命中すると、装備者の与ダメージ+3.5~7%、最大10重まで重ね掛け可能、継続時間6秒、0.3秒に1回のみ発動可能。控えにいる時、重ね掛けの効率が2倍になる。重複して発動すると継続時間が更新される。ダメージアップ効果獲得時、所持している重数が5重以上の場合、追加で装備者の異常マスタリー+50~100Pt。異常マスタリーアップ効果は重ね掛け不可、継続時間6秒。"
        },
        {
            name:"磨き抜かれた切っ先",
            lank:"S",
            type:"abnormal",
            attackValue:48,
            subStatus:"異常マスタリー",
            subStatusValue:"36",
            spec:"ダッシュ攻撃を発動したとき、猟欲を一層獲得。一層につき装備者の物理与ダメージ+12～24％（最大3重、継続時間10秒）。この効果は0.5秒毎に一回のみ発動可能。重複発動時に継続時間が更新。接敵状態突入時か極限回避発動時、猟欲を3層獲得する。猟欲の重数が上限になると装備者の状態異常蓄積値+40～80％"
        },
        {
            name:"複合コンパイラ",
            lank:"S",
            type:"abnormal",
            attackValue:46,
            subStatus:"貫通率",
            subStatusValue:"9.6%",
            spec:"攻撃力+12/15/18/21/24%。『特殊スキル』または『強化特殊スキル』を発動する度に、装備者の異常マスタリー+25/31/37/43/50Pt、最大3重まで重ね掛け可能、継続時間8秒。継続時間は重ごとに独立してカウントされる。"
        },
        {
            name:"電撃リップグロス",
            lank:"S",
            type:"abnormal",
            attackValue:40,
            subStatus:"異常マスタリー",
            subStatusValue:"30",
            spec:"フィールド上に状態異常の敵がいる時、装備者の攻撃力が10/11.5/13/14.5/16%アップし、ターゲットに与えるダメージが追加で15/17.5/20/22.5/25%アップする。"
        },
        {
            name:"双生の涙",
            lank:"A",
            type:"abnormal",
            attackValue:40,
            subStatus:"攻撃力%",
            subStatusValue:"10%",
            spec:"任意のメンバーが敵を状態異常にした時、装備者にバフ効果を1重与える。バフ効果1重につき、装備者の異常マスタリーが30/34/38/42/48Ptアップする、最大4重まで重ね掛け可能。ターゲットがブレイク状態から復帰する、または死亡した時、バフ効果が終了する。継続時間は重ごとに独立してカウントされる。"
        },
        {
            name:"グロウル・マイ・カー",
            lank:"A",
            type:"abnormal",
            attackValue:42,
            subStatus:"攻撃力%",
            subStatusValue:"10%",
            spec:"『強化特殊スキル』が敵に命中すると、以下の効果のいずれか1つが発動する、継続時間5秒、0.3秒に1回のみ発動可能。同じ効果は重ね掛け不可、重複して発動すると継続時間が更新される。異なる効果は併存可能。装備者の攻撃力+8%。装備者の異常マスタリー+40Pt。装備者の状態異常蓄積効率+25%。"
        },
        {
            name:"密林の食いしん坊",
            lank:"A",
            type:"abnormal",
            attackValue:40,
            subStatus:"異常マスタリー",
            subStatusValue:"30",
            spec:"エネルギー値を10Pt消費するたびに、バフ効果を1重獲得する。バフ効果1重につき、装備者の攻撃力が2.5/2.8/3.2/3.6/4%アップする、最大10重まで重ね掛け可能、継続時間10秒。継続時間は重ごとに独立してカウントされる。"
        },
        {
            name:"「磁気嵐」-参式",
            lank:"B",
            type:"abnormal",
            attackValue:32,
            subStatus:"貫通率",
            subStatusValue:"6.4%",
            spec:"任意のメンバーが敵を状態異常にした時、装備者のエネルギーが3.5/4/4.5/5/5.5Pt回復する、12秒に1回のみ発動可能。"
        },
        {
            name:"「磁気嵐」-弐式",
            lank:"B",
            type:"abnormal",
            attackValue:32,
            subStatus:"異常マスタリー",
            subStatusValue:"24",
            spec:"状態異常蓄積値を溜めると、装備者の異常マスタリーが25/28/32/36/40Ptアップする、継続時間10秒。20秒毎に1回のみ発動可能。"
        },
        {
            name:"「磁気嵐」-壱式",
            lank:"B",
            type:"abnormal",
            attackValue:32,
            subStatus:"攻撃力%",
            subStatusValue:"8%",
            spec:"状態異常蓄積値を溜めると、装備者の異常掌握が25/28/32/36/40Ptアップする、継続時間10秒。20秒毎に1回のみ発動可能。"
        },
// 支援
        {
            name:"啜り泣くゆりかご",
            lank:"S",
            type:"support",
            attackValue:46,
            subStatus:"貫通率",
            subStatusValue:"9.6%",
            spec:"控えにいる時、装備者のエネルギー自動回復+0.6/0.75/0.9/1.05/1.2Pt/秒。装備者の攻撃が敵に命中した時、チーム全体のターゲットに与えるダメージ+10/12.5/15/17.5/20%、継続時間3秒。効果継続中、0.5秒ごとにこのバフ効果が追加で+1.7/2/2.5/3/3.3%、最大10.2/12/15/18/19.8%まで。重複して発動すると、継続時間のみが更新され、ダメージアップ効果が更新されない。同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"喧嘩腰のボンバルダム",
            lank:"A",
            type:"support",
            attackValue:42,
            subStatus:"エネルギー自動回復",
            subStatusValue:"20%",
            spec:"チームにいる任意の味方ユニットの攻撃が敵に命中した時、すべての味方ユニットの攻撃力+2.5%、最大4重まで重ね掛け可能、継続時間8秒。継続時間は重ごとに独立してカウントされる。味方ユニット1名につき、1重のバフ効果を付与できる。同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"ゲームボール",
            lank:"A",
            type:"support",
            attackValue:40,
            subStatus:"エネルギー自動回復",
            subStatusValue:"20%",
            spec:"装備者の攻撃が敵に命中し、なおかつタイプの有利効果が発生した時、チーム全体の該当ターゲットに対する会心率+12/13.5/15.5/17.5/20%、継続時間12秒。同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"恥じらう悪面",
            lank:"A",
            type:"support",
            attackValue:40,
            subStatus:"攻撃力%",
            subStatusValue:"10%",
            spec:"氷属性ダメージが15/17.5/20/22/24%アップする。『強化特殊スキル』を発動する度に、チーム全体の攻撃力が2/2.3/2.6/2.9/3.2%アップする、最大4重まで重ね掛け可能、継続時間12秒。重ね掛けすると継続時間が更新される。同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"ザ・ボールト",
            lank:"A",
            type:"support",
            attackValue:42,
            subStatus:"エネルギー自動回復",
            subStatusValue:"20%",
            spec:"『強化特殊スキル』、『連携スキル』または『終結スキル』がエーテル属性ダメージを与えた時、チーム全体がターゲットに与えるダメージが15/17.5/20/22/24%アップし、装備者の1秒ごとのエネルギー自動回復が0.5/0.58/0.65/0.72/0.8Ptアップする、継続時間2秒。同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"歳月の薄片",
            lank:"A",
            type:"support",
            attackValue:40,
            subStatus:"攻撃力％",
            subStatusValue:"10%",
            spec:"任意のメンバーが『回避反撃』/『強化特殊スキル』/『支援攻撃』/『連携スキル』を発動した時、追加でデシベル値を「20/25/30/35」「23/28.5/34.5/40」「26/32/39/45」「29/35.5/43.5/50」「32/40/48/55」Pt獲得し、装備者のエネルギーが「0.7/0.8/0.9/1/1.1」Pt回復する、12秒に1回のみ発動可能。スキルそれぞれのクールタイムが分けて計算され、同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"「残響」-Ⅲ型",
            lank:"B",
            type:"support",
            attackValue:32,
            subStatus:"HP%",
            subStatusValue:"8%",
            spec:"『連携スキル』または『終結スキル』を発動すると、チーム全体の攻撃力が8/9/10/11/12%アップする、継続時間10秒。20秒毎に1回のみ発動可能。同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"「残響」-Ⅱ型",
            lank:"B",
            type:"support",
            attackValue:32,
            subStatus:"エネルギー自動回復",
            subStatusValue:"16%",
            spec:"『強化特殊スキル』または『連携スキル』を発動すると、チーム全体の異常掌握と異常マスタリーが10/12/13/15/16Ptアップする、継続時間10秒。20秒毎に1回のみ発動可能。同じパッシブ効果は重ね掛け不可。"
        },
        {
            name:"「残響」-Ⅰ型",
            lank:"B",
            type:"support",
            attackValue:32,
            subStatus:"攻撃力%",
            subStatusValue:"8%",
            spec:"『強化特殊スキル』を発動すると、チーム全体の衝撃力が8/9/10/11/12%アップする、継続時間10秒。20秒毎に1回のみ発動可能。同じパッシブ効果は重ね掛け不可。"
        },
// 防護
        {
            name:"猛進するキバ",
            lank:"S",
            type:"defence",
            attackValue:48,
            subStatus:"衝撃力",
            subStatusValue:"7.2%",
            spec:"装備者のシールド生成量+30～60％。任意のメンバーが「看破」または「極限回避」を発動したとき、チーム全体の与ダメージ+18～36％、与えるブレイク値+12～24％。継続時間20秒。重ね掛け不可"
        },
        {
            name:"秩序の守り手・特化型",
            lank:"A",
            type:"defence",
            attackValue:42,
            subStatus:"攻撃力%",
            subStatusValue:"10%",
            spec:"シールドがあるとき、装備者のエネルギー自動回復+0.4～0.64％/秒。強化特殊スキルと支援突撃による状態異常蓄積値+36～55％。"
        },
        {
            name:"ビガー・シリンダー",
            lank:"A",
            type:"defence",
            attackValue:42,
            subStatus:"防御力%",
            subStatusValue:"16%",
            spec:"自身の被ダメージが7.5/8.5/9.5/10.5/12%ダウンする。敵の攻撃を受けた後、次の攻撃が敵に命中すると、装備者の防御力600/690/780/870/960%相当のダメージを追加で与え、必ず会心が出る。この効果は7.5秒に1回のみ発動可能。"
        },
        {
            name:"ホットスプリング",
            lank:"",
            type:"defence",
            attackValue:40,
            subStatus:"攻撃力%",
            subStatusValue:"10%",
            spec:"敵の攻撃を受けた時、装備者の防御力が20/23/26/29/32%アップする、継続時間8秒。"
        },
        {
            name:"ラビットチャージャー",
            lank:"A",
            type:"defence",
            attackValue:40,
            subStatus:"防御力%",
            subStatusValue:"16%",
            spec:"HP上限が8/9.2/10.4/11.6/12.8%アップする。シールドを所持している場合、装備者の攻撃力が10/11.5/13/14.5/16%アップする。"
        },
        {
            name:"正規版変身装置",
            lank:"",
            type:"defence",
            attackValue:40,
            subStatus:"HP%",
            subStatusValue:"10%",
            spec:"HP上限が8/9/10/11/12.5%アップする。敵の攻撃を受けた時、装備者の衝撃力が10/11.5/13/14.5/16%アップする、継続時間12秒。"
        },
        {
            name:"「恒等式」-変格",
            lank:"",
            type:"defence",
            attackValue:32,
            subStatus:"防御力%",
            subStatusValue:"12.8%",
            spec:"敵の攻撃を受けた時、攻撃を仕掛けた敵の与ダメージが6/7/8/9/10%ダウンする、継続時間12秒。"
        },
        {
            name:"「恒等式」-本格",
            lank:"B",
            type:"defence",
            attackValue:32,
            subStatus:"防御力",
            subStatusValue:"12.8%",
            spec:"敵の攻撃を受けた時、装備者の防御力が20/23/26/29/32%アップする、継続時間8秒。"
        }
]