<template>
  <div class="background">
    <a class="logo" href="/"></a>
    <div v-for="key in keys" v-if="$route.params.name === key" :id="'back' + key" class="top">
      <div class="top-text ">{{ messages[$route.params.name].up }}</div>
      <div class="bottom-text ">{{ messages[$route.params.name].down }}</div>
    </div>
    <div class="buttons " style="padding-left: 1em; padding-top: 1em; ">
      <a :class="{ 'active-button': selected===key, button: true} " v-for="(buttonText, key) in buttonTexts " @click="selected=key ">
        {{ buttonText }}
      </a>
      <a style="font-size: 15px;padding-right: 1.5em;padding-left: 1.5em; padding-top: .5em; padding-bottom: .5em; margin:
      0.2em; display: inline-block; color: white;background-color: #C3C3C3;border-radius: 1rem; " href="http://stagekk.org/game ">문제니로 게임하기</a>
    </div>
    <div class="policys">
      <template v-for="(value, key) in candidates[$route.params.name]">
        <transition-group name="custom" enter-active-class="animated fadeInLeft" tag="Card">
          <Card v-for="content in value" key="key" v-if="selected==='all' || selected===key" :summary="content.summary" :description="content.description"
            :where="content.where" />
        </transition-group>
      </template>
    </div>
  </div>
</template>
<script>
  import Card from './Card.vue'
  export default {
    data() {
      return {
        selected: 'all',
        keys: [
          'moon',
          'jung',
          'lee',
          'ahn',
          'nam',
          'you',
          'sim',
        ],
        messages: {
          moon: {
            up: `대선에 다시 도전한다`,
            down: `"대세는 대세입니다"`
          },
          jung: {
            up: `정치 세대교체를 이룬다`,
            down: `"충남 넘어 전국 엑소로"`
          },
          lee: {
            up: `노동자 출신 대통령 꿈꾼다`,
            down: `"흙수저도 행복한 국가로"`
          },
          ahn: {
            up: `4차 산업혁명 시대, 내게 맡겨라`,
            down: `"국가경영도 성공합니다"`
          },
          nam: {
            up: `일자리 대통령 되겠다`,
            down: `"풍부한 정치 경험을 믿어봐요"`
          },
          you: {
            up: `경제 전문 대통령은 바로 나`,
            down: `"일가정 행복한 사회로"`
          },
          sim: {
            up: `최초의 친노동 정부 수립한다`,
            down: `"진짜 진보 정치, 제가 합니다"`
          },
        },
        candidates: {
          moon: {
            job: [{
              summary: '“대통령 직속 일자리 위원회에서 직접 일자리 챙긴다”',
              description: '대통령 직속 일자리 위원회를 만들어 대통령이 위원장을 맡고, 청와대에 일자리 상황실을 만들어 집무실에 현황판을 걸고 직접 일자리를 챙기겠다고 밝혔다. 구체적인 일자리 대책으로 ▲군 부사관과 복지 공무원, 소방관과 경찰 등 정부와 공공부문의 일자리 확충, ▲노동 시간 단축, ▲대기업과 중소기업, 정규직과 비정규직의 임금 격차를 줄이는 공정임금제 실시를 거듭 제시했다.',
              where: `[발언] 대학생·청년 지지모임 '허니 MOON' 출범식 中 (2017.2)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3422959&ref=A`,
                `http://news.kbs.co.kr/news/view.do?ncd=3413628&ref=A`
              ],
            }, {
              summary: `“131만 개의 일자리(81만 개 공공 일자리)를 창출하겠다”`,
              description: `공공부문 일자리 확대(현재 7.6%인 일자리 비율을 3% 포인트 올려 공공부문 일자리 81만 개를 만들어낼 것)와 연장 노동을 포함한 노동시간을 주 52시간 이내로 규정한 법정 노동시간을 준수하여 130만 개+α의 일자리를 만들겠다고 공언했다. 공공부문 일자리 정책을 추진한 뒤 그 힘으로 민간부문까지 끌고 나갈 수 있는 사회적 대타협을 이끌겠다고 밝혔다`,
              where: `[발언] 정책공간 국민성장 주최 일자리 정책포럼 (2017.1)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3414414&ref=A`,
                `http://news.kbs.co.kr/news/view.do?ncd=3413956&ref=A`
              ],
            }, {
              summary: `“공정임금제 실시할 것”`,
              description: `중소기업 노동자들의 임금을 대기업 노동자들의 80% 수준까지 끌어올리는 공정임금제를 실시하겠다고 밝혔다. 지난 10년간 늘어난 일자리의 92%를 창업 기업을 포함한 중소기업이 만들었는데, 중소기업 노동자들의 임금이 대기업 노동자의 60% 수준밖에 되지 않는 현실로 인해 청년들은 구직난을, 중소기업은 구인난을 겪고 있다는 이유에서다.`,
              where: `[발언] '국민성장 정책포럼' 일자리 정책 발표 중 (2017.01)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3422959&ref=A`],
            }, {
              summary: `"4년간 청년 일자리 71만 개 만들겠다 "`,
              description: `공공 일자리 34만 8천 개, 민간 37만 개 등 모두 71만 8천 개의 일자리를 창출하기 위한 방안을 제시했다. 청년 고용 할당제로 25만 2천 개의 일자리가, 노동시간을 주 52시간으로 단축함으로 인해 11만 8천 개가 창출되어 총 37만 개의 일자리를 만들어낼 수 있다고 밝혔다.`,
              where: `[발언] 새정치 민주연합 당대표 ‘청년경제구상’ 내용 中 (2015.10)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3162517&ref=A`],
            }, {
              summary: `“매년 정원의 3% 이상씩 청년 미취업자 고용 의무화”`,
              description: `모든 공공기관과 지방공기업은 매년 정원의 3% 이상씩 청년 미취업자를 고용하도록 의무화하고, 이를 상시 고용하는 근로자 수 300명 이상의 민간기업까지 확대하여 적용한다. 청년 고용의무를 이행하지 아니한 사업주에게 고용부담금을 부과하고 고용의무를 이행한 사업주에게는 고용지원금을 지급하도록 한다.`,
              where: `[법안 대표 발의] 청년고용할당제: 청년고용촉진 특별법 일부 개정 법률안 (19대 국회: 2012.11)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=2560759`],
            }],
            university: [{
              summary: `“대학교 공동입학, 공동학위제 도입하겠다”`,
              description: `대학 평준화를 위해 공동입학제, 공동학위제를 제안했다.(18대 대선 공약이기도 하다) 서울대학교를 비롯해 지방 국 공립대는 함께 입학하고 상호 수강 가능한 네트워크 제도를 통해 서울대 학과 지방 국립대학 간의 서열화를 줄이는 것을 목표로 한다. 서울대를 폐지하는 것이 아니라 지방 국립대를 서울대 수준으로 끌어올리는 것으로, 이 제도가 정착될 시 사립대학으로 확대 가능하다.`,
              where: `[발췌] 대담집 「대한민국이 묻는다」中 (2017.01)`,
              links: [`http://www.mediapen.com/news/view/226581`],
            }, {
              summary: `“반값 등록금, 대학 서열화 폐지 등을 기필코 이뤄내겠다”`,
              description: `지지자들과 질의응답하는 "반값 등록금, 대학 서열화 폐지 등을 기필코 이뤄내겠다"고 밝혔다. 2012년 18대 대선 공약으로 내세웠던 ▲‘등록금 상한제’ 도입으로 반값 등록금 실현, ▲‘고등교육재정 교부금 법’ 제정, ▲‘등록금 심의위원회’ 학생·교직원·전문가 참여 확대와 기능 강화, ▲저소득층 학생에게 국가장학금 지원 등의 연장 선상으로 해석된다. `,
              where: `[발언] 포럼 대구경북 출범식 中 (2017.02)`,
              links: [`f`],
            }, {
              summary: `“대학생 공공기숙사 확대하겠다”`,
              description: `2012년 18대 대선 후보 공약으로 ▲대학생용 전세임대주택과 공공 원룸텔 연 1만 호 공급 ▲대학별 자체 기숙사 신·증축 지원 확대 (대학 평가 및 재정 지원 연계) ▲국공유지 활용 공공기숙사 1만 호 공급 추진 등을 내놓았다.`,
              where: `[18대 대선 공약] 대학생 공공기숙사 확대 (2012)`,
              links: [`f`],
            }],
            rent: [{
              summary: `“부동산 보유세 인상해야”`,
              description: `부동산 보유세란 재산세(지방세)와 종합부동산세(국세)로 이루어진 것으로, 현재 한국의 부동산 보유세가 경제협력개발기구(OECD) 소속 국가들보다 낮다며 높여야 한다는 입장을 취했다.`,
              where: `[발언] 대담집 「대한민국이 묻는다」 언론 인터뷰 中 (2017.01)`,
              links: [`f`],
            }, {
              summary: `“전월세 피크제(상한제) 도입하겠다”`,
              description: `전월세 상승분을 지방자치단체와 협의해 결정하는 전월세 피크제(상한제)로 주거비 부담을 해소하겠다고 밝혔다. 전월세 피크제로 임대료 조정제가 실시되면 청년 주거안정에 실질적으로 큰 도움이 될 것이라며, ▲임대차 계약 갱신 청구권 신설 ▲지자체별로 적정 임대료를 산정하는 표준임대료 도입 ▲공공임대주택 비중 11%로 확대 등도 제안했다.`,
              where: `[발언] 새정치 민주연합 당 대표 ‘청년경제구상’ 내용 中 (2015.10)`,
              links: [
                `http://www.newsis.com/ar_detail/view.html/?ar_id=NISX20151011_0010342442&cID=10301&pID=10300`
              ],
            }, {
              summary: `“공공임대주택 5만 호 공급하겠다”`,
              description: `셰어하우스형 공공임대주택 5만 호를 공급하여 청년의 주거권을 확보한다. 1인 기준 월세 30만 원 이하의 저렴한 임대료로 총 15만 명의 청년들에게 제공하며, 향후 구조변경 없이 신혼부부 등 다양한 계층에게 제공할 수 있어 비용을 최소화할 수 있는 주거 정책이라고 밝혔다. `,
              where: `[발언] 새정치 민주연합 당 대표 ‘청년경제구상’ 내용 中 (2015.10)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3162326&ref=A`],
            }, {
              summary: `“청년 창업 위한 공공임대주택 확산 시킬 것”`,
              description: `창업 준비생에게 사무와 주거공간을 제공하는 공공임대주택을 정책으로 발전시켜 확산시켜 나가겠다고 말했다. `,
              where: `[발언] 서울 성북구의 공공임대주택인 '도전숙'방문 中 (2015.10)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3164787&ref=A`],
            }],
            military: [{
              summary: `“군 복무 기간을 18개월로 단축할 수 있다”`,
              description: `현대전은 보병 중심이 아닌 현대전이고 과학전이기에 병력 축소가 가능하다. 군 복무 기간을 18개월로 단축하고, 병력을 50만 명으로 줄이는 내용의 군개혁을 참여 정부에서 진행했지만, 이명박 정부에서부터 중단됐다. 집권하면 이를 재가동 시킬 것이며, 모병제 실시는 통일 이후가 바람직하다. (대담집에는 사병 급여 수준을 대폭 높이면 굳이 모병제를 하지 않아도 된다는 내용도 담겨있다.)`,
              where: `[발언] 대담집 ‘대한민국이 묻는다’ 출판기념회中 (2017.01)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3418202&ref=A`],
            }, {
              summary: `“종내에는 모병제로 가야 한다”`,
              description: `군대 기강이나 전투력은 억압으로 생기는 게 아니고, 자유분방한 병영생활 속에서 더 큰 단결력도 필요하기 때문에 모병제로 가야 된다고 주장했다. 사병 봉급 인상 등 군인 처우 개선과 관련해서는, “의무 복무라는 것은 국방 의무를 다하라는 것이지 그 기간에 노동력을 무상으로 제공하라는 뜻은 아니다"라며 군은 노동에 상응하는 급여를 지급해야 한다고 말했다.`,
              where: `[발언] '곰신 카페'(현역 장병의 여자친구 모임) 회원들과의 병영문화 개선 간담회 中 (2014.11)`,
              links: [`http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201411231835131&code=910402`],
            }],
            women: [{
              summary: `“워킹맘 근로시간 단축하겠다”`,
              description: `정부세종청사에서 한 공무원이 과로로 사망한 사건 이후, 본인 SNS에 아이 키우는 엄마(워킹맘)에게 근무시간을 10시부터 오후 4시까지로 임금 감소 없이 근로시간을 단축하는 등의 방안을 검토해야 한다는 내용을 담은 글을 올렸다`,
              where: `[발언] 문재인의 SNS 게시글 中 (2017.1)`,
              links: [`https://www.facebook.com/moonbyun1/posts/1007678932671792`],
            }, {
              summary: `“셋째부턴 국가가 대학 등록금까지 책임지겠다”`,
              description: `1월 일자리 공약을 발표한 뒤, 창업 이후 정규직 비율을 꾸준히 늘려온 한 제약회사를 방문해 다둥이 아빠와 워킹맘들을 만나, 네 아이를 키우는 아빠에겐 "셋째부턴 국가가 대학 등록금까지 책임지겠다"고 약속했다.`,
              where: `[발언] 정규직 비율 꾸준히 늘려온 제약회사 방문 中 (2017.1)`,
              links: [`http://mbn.mk.co.kr/pages/news/newsView.php?category=mbn00006&news_seq_no=3122020`],
            }, {
              summary: ` "맞벌이 부모 10~16시 유연근무제"`,
              description: `자녀가 초등학교에 들어갈 때까지 부모가 어린이집이나 유치원을 보낸 이후 출근하고 아이가 돌아오기 전에 퇴근할 수 있게 일하는 시간을 단축하는 제도로, 근무시간을 오전 10시부터 오후 4시까지 임금 감소 없이 단축하고 유연근무제를 선택할 수 있게 해야 한다고 주장했다.`,
              where: `[공약] 일·가정 양립 일자리 현장 ' 방문 中 (2017.2)`,
              links: [
                `http://www.yonhapnews.co.kr/bulletin/2017/02/08/0200000000AKR20170208157400001.HTML?input=1195m`
              ],
            }, {
              summary: `"출산부터 보육까지 국가지원"`,
              description: `육아로 인한 경력단절 여성이 생기지 않도록 부부가 함께 육아를 할 수 있는 방안을 마련하겠다고 밝히며, ▲육아휴직수당 인상 ▲국공립 유치원 확충 ▲ 모범 일자리 기업 혜택 및 지원책 마련 ▲노동시간 단축 등의 공약을 내세웠다.`,
              where: `[공약] 일·가정 양립 일자리 현장' 방문 中 (2017.02)`,
              links: [
                `http://www.yonhapnews.co.kr/bulletin/2017/02/08/0200000000AKR20170208157400001.HTML?input=1195m`
              ],
            }],
          },
          jung: {
            job: [{
              summary: `“노동시장 유연화 정책 찬성”`,
              description: `비정규직과 파트타임 다양한 형태의 노동계약과 일자리를 늘리는 것은 현 산업구조에서 필연적이다. 문제는 비정규직이 값싼 노동력과 노동착취를 의미하는 단어가 되어 버린 현실에 있다. 노동계약 상태에 대한 정부의 강력한 규칙 제정과 노동조합 역할의 활성화 등을 통해 비정규직 근로자 처우 개선을 해야 한다.`,
              where: `[발언] 가톨릭 평화방송 라디오 <열린세상 오늘! 김성덕입니다>와의 인터뷰 中`,
              links: [`http://m.cpbc.co.kr/CMS/news/view_body.php?cid=669004&path=201701`],
            }, {
              summary: `“동일노동 동일임금 법칙 확립”`,
              description: `일자리의 질적 증가도 중요하지만, 기존의 일자리가 양질의 일자리로 전환하지 못하는 임금격차, 대기업 중심의 수직화된 이윤배분 구조를 깨는 것이 더 중요하다. 중소기업과 중견기업의 일자리가 젊은이들에게 선택될 수 있는 일자리가 안 되는 것을 해소해야 한다. 노동조합의 교섭력을 높여야 하고 중소기업의 독자적 기술력을 높여줘서 가격 협상력을 끌어올려야 한다. 정부가 할 일은 사회안전망과 소득재분배를 왕성하도록 돕는 것이다.`,
              where: `[발언] 허핑턴포스트 인터뷰 中 (2017.02)`,
              links: [`http://www.huffingtonpost.kr/2017/02/03/story_n_14567640.html`],
            }, {
              summary: `“정부의 세금과 재정으로 만드는 일자리는 임시방편”`,
              description: `취업을 위해 노력하는 청년들을 지원하는 정책도 중요하지만, 본질적으로는 기업 등의 새로운 투자를 통해 일자리가 새로 만들어지도록 해야 한다. 경제민주화, 혁신 주도형, 노동 시장에 대한 정비, 적극적인 M&A 한계기업 구조조정 등을 통해 기업가들이 도전과 투자를 할 수 있도록 해줘야 한다.`,
              where: `[발언] 충청남도 대학생 아르바이트생들과의 오찬(2017.02) 中 & 허핑턴포스트 인터뷰 中 (2017.02)`,
              links: [`http://news.joins.com/article/21218734`,
                `http://www.huffingtonpost.kr/2017/02/03/story_n_14567640.html`
              ],
            }, {
              summary: `“일할 능력이 있는 사람에게는 일자리가 복지”`,
              description: `일할 능력 있는 사람에게는 일자리로, 일할 능력이 없는 사람에게 복지 혜택을 집중해야 한다. 공교육 강화로 공공부문 일자리를 창출하고 근로시간 단축을 통해 일자리를 나누며, 일시적 노동시장 이탈자를 위해 실업급여, 육아휴직 급여 등 소득대체율과 상한액을 상향 조정하겠다`,
              where: `[발언] 경기일보 인터뷰- [대선주자에게 듣는다] 안희정 충남지사 中 (2017.02)`,
              links: [`http://www.kyeonggi.com/?mod=news&act=articleView&idxno=1311912`],
            }, {
              summary: `“청년 창업 활성화”`,
              description: `구직에서 창직으로의 일자리 창출 패러다임을 변화하는 시도를 통해 청년 실업률을 낮추고, 도내 지식서비스 산업 육성 기반을 확충 ➜ 청년창업을 통한 신규 고용 창출 유도 및 지역 경제 활성화`,
              where: `[충남도정책] 청년 CEO 500프로젝트 (2015)`,
              links: [`http://m.asiae.co.kr/view.htm?no=2013061208060144699#ba`],
            }, {
              summary: `“중소기업 성장 지원”`,
              description: `중앙정부 및 전국 지자체의 창업 지원프로그램 중 기업 설립 후 3년 이내 지원프로그램이 없어 중소기업 단계까지 성장에 어려움을 겪는 것을 해소하고자, 창업 후 2~3년 이내의 기업을 대상으로 판로개척, 브랜드 인지도 제고 등을 통해 중소기업화 지원 ➜ 민선 6기 4년 동안 100개 기업 중소기업화 지원`,
              where: `[충남도정책] 작은 브랜드 100개 찾기 (청년창업) 프로젝트 (2015)`,
              links: [``],
            }],
            university: [{
              summary: `“반값등록금, 약속할 수 없다”`,
              description: `현재 국가 재정의 우선순위를 고려했을 때, 노년층과 영유아층에 대한 복지를 우선적으로 집행해야 한다. 좋은 대학 환경을 만드는 것은 중요하지만, 지금 당장 반값 등록금을 시행하는 것은 현실적으로 쉽지 않다.`,
              where: `[발언] 허핑턴포스트 인터뷰 中 (2017.02)`,
              links: [`http://www.huffingtonpost.kr/2017/02/03/story_n_14586886.html?utm_id=naver`],
            }, {
              summary: `“무작정 반값등록금보다, 교육환경 개선도 생각할 것”`,
              description: `교육 재정을 등록금 부담을 현재의 수준에서 더 떨어뜨리는 데 쓰는 것이 좋을지, 아니면 교수 확충과 시설 확충 등 대학 환경 개선에 쓰는 것이 더 좋은 것인지에 대해서 검토해 볼 필요가 있다.`,
              where: `[발언] 충청남도 도민리포터 발대식 인터뷰中 (2011)`,
              links: [``],
            }, {
              summary: `“반값등록금과 대학 구조조정의 문제는 전 국가적 합의가 필요”`,
              description: `사립대학 경영이 어려운 현실에 놓여 있지만, 반값등록금과 대학구조조정 등의 대학문제는 여야 간 정쟁으로 비화되는 것이 아니라, 국가적으로 합의하여 신중하게 결정해야 하는 사안이다.`,
              where: `[발언] 제10회 사립대학총장협의회中 (2013.04)`,
              links: [`https://news.unn.net/news/articleView.html?idxno=123457`],
            }, ],
            rent: [{
              summary: `“신혼부부‧학생‧일인 가구에게 임대 주택 공급”`,
              description: `정부의 주택정책과 연계하여, 서민 임대주택을 지속적으로 공급하고, 대학생, 사회 초년생, 신혼부부 등을 위한 행복주택을 건설했다.`,
              where: `[충남도정책] 도민 수요 대응형 주택 및 임대주택 지속 공급 (2015)`,
              links: [`http://www.daejonilbo.com/news/newsitem.asp?pk_no=1129802`],
            }, {
              summary: `“임대주택 주민들로부터 감사패”`,
              description: `2011년 주민연대 대표들과의 면담 후, 충청남도는 공공 건설 임대주택 관련 3개 법 개정에 적극 지원했다. 법 개정으로 임대 보증금과 주거권을 보호받을 수 있게 되자, 주민연대가 이에 대한 감사의 뜻을 전하기 위해 안희정 충남지사에게 감사패를 수여한 바 있다`,
              where: `[수상] 전국 부도 공공 건설 임대주택 주민연대, 감사패 수여 (2013)`,
              links: [
                `http://www.newsis.com/ar_detail/view.html/?ar_id=NISX20130813_0012285405&cID=10807&pID=10800`
              ],
            }],
            military: [{
              summary: `“군 복무 단축은 표를 전제한 공약”`,
              description: `문재인 후보의 '군 복무 기간 1년으로 단축' 주장에 대해 "민주주의 선거에서 표를 전제하고 공약을 내는 것은 나라를 더 위험하게 만드는 일"이라고 정면 반박하며, 국가 안보를 위협할 수 있는 사병 복무 기간 단축 공약에 대해 반대한다는 뜻을 밝혔다.`,
              where: `[발언] 인천광역시청 브리핑룸에서 열린 출입기자 간담회中 (2017.01)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3413648`],
            }, {
              summary: `“전시작전권 환수해야 한다”`,
              description: `“싸우면 이길 수 있는 군대를 갖춰야 한다"라며 남북 관계 개선, 동북아 평화 등에 주도적인 역할을 하기 위해서는 한국의 자위력이 갖춰져야 한다며 튼튼한 국방력을 강조했다. 우리나라의 독자적인 작전 능력 기회를 가져야 하며 미국에 지나치게 의존하는 것이 바람직하지 않기 때문에 전시작전권을 환수해야 하며, 우리의 국방 태세를 놓고 군 혁신을 하는 것이 먼저이지 복무 기간은 문제의 본질이 되어서는 안 된다고 덧붙였다.`,
              where: `[발언]  광주에서 열린 지방의원 간담회 中 (2017.02)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3427371&ref=A`],
            }],
            women: [{
              summary: `“직장 내 친육아적인 인사제도를 정착시키겠다”`,
              description: `직장에서 아빠의 육아휴직을 권장하겠다고 강조하며, 차별 없는 인사제도와 육아휴직에 따른 대체인력 투입 등을 약속했다. 부모가 안심하고 자녀를 맡길 수 있도록 보육교사 처우 개선과 신분 보장 등을 위해 노력하겠다며 "보육의 국가 책임성 강화를 위해 공공보육을 강화하겠다"고 강조했다.`,
              where: `[발언]  충남도청 공무원들과의 대화 中 (2017.01)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3420390&ref=A`],
            }, {
              summary: `“공공형·국공립 어린이집 비율을 확대하겠다”`,
              description: `현 국공립 어린이집 비율을 임기 중에 30%(공공형 포함), 중장기적으로 50%까지 확대하고, 현재 혜택을 받지 못하는 중소기업 직장어린이집은 설치 지원금을 확대해 혜택을 받도록 지원하며, 산업단지형 공동 직장어린이집 확대 방안도 마련하겠다고 밝혔다.`,
              where: `[발언] 전자신문과의 인터뷰 中 (2017.02)`,
              links: [`http://www.etnews.com/20170212000047`],
            }, {
              summary: `“공공산후조리원 운영”`,
              description: `- 공공산후조리원 운영 활성화에 따른 Total Care 서비스 체계 구축 - 모자보건전문센터 설치로 산전·분만·산후관리 등 모자보건의료 서비스 제공`,
              where: `[충남도 정책] 공공 산후조리원 운영 활성화 (2014)`,
              links: [``],
            }, {
              summary: `“보육의 공공성 확보”`,
              description: `- 보육의 공공성 확보 및 질 좋은 보육서비스 제공 - 일․가정 양립을 위한 보육환경 조성으로 맞벌이 경제활동 지원`,
              where: `[충남도 정책] 국공립 어린이집 및 직장어린이집 설치 확대 (2014)`,
              links: [``],
            }],
          },
          lee: {
            job: [{
              summary: `“이재명식 뉴딜정책으로 일자리 확대하겠다”`,
              description: `대선 출마 선언 공식 기자회견에서 ‘이재명식 뉴딜 성장 정책'으로 함께 잘 사는 경제를 만들 것이라며 ▲공정경제질서 회복, ▲임금 인상과 일자리 확대, ▲증세와 복지 확대, ▲가계소득 증대로 경제선 순환과 성장을 이루자는 것을 강조했다`,
              where: `[발언] 대선 출마 선언 기자회견 (2017.01)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3416243&ref=A`],
            }, {
              summary: `“성과연봉제 폐지하겠다”`,
              description: `임금을 근속연수와 직급 기준이 아닌 1년 동안의 개인별 성과에 따라 차등을 두는 제도인 성과연봉제는 근로자 지위에 중대한 영향을 미치는 사안이지만, 노사 합의 없이 적용된 곳이 많다며, 대통령에 당선되면 성과연봉제 자체를 폐지하겠다고 확언했다.`,
              where: `[발언] 본인 SNS에 게시 (2017.02)`,
              links: [`https://www.facebook.com/jaemyunglee/posts/1391314184243740`],
            }, {
              summary: `“기본소득 통한 유효 수효 창출, 내수 진작으로 일자리 만들겠다”`,
              description: `아동·청소년·청년·노인·장애인·농어민에게 연 100만 원씩 지역화폐를 지급하는 기본소득제를 통해서 유효수요를 창출하고, 근로시간을 준수하고 연장근로수당을 지급하는 근로환경 정상화를 한다면 일자리를 269만 개 만들 수 있다고 주장했다.`,
              where: `[발언] 대선 출마 선언 기자회견 (2017.01)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3426611&ref=A`],
            }, {
              summary: `“성남시 일자리 창출로 매니페스토 최우수상 수상”`,
              description: `다음과 같은 이유로 매니페스토 일자리 부분 최우수상을 수상한 바 있다. ▲시민 기업 104개 육성 ▲1,189명 일자리 창출 ▲공공부문 비정규직 607명 정규직 전환 ▲기업 유치와 벤처기업 1000개 돌파 ▲관급공사 14만 9485명 성남 시민 고용 ▲민간 건축공사장의 27만 2600명 성남 시민 고용 ▲기업과의 융합행정을 통한 다문화가정 여성의 일자리 창출 ▲일자리 공시 목표를 118% 초과 달성`,
              where: `[성남시 정책] 매니페스토 일자리 부분 “최우수상” 수상 (2012/2013)`,
              links: [`http://www.kyeonggi.com/news/articleView.html?idxno=704162`],
            }, ],
            university: [{
              summary: `“대학 등록금을 현재의 절반 수준으로”`,
              description: `“교육 양극화가 소득 양극화로 연결되지 않도록 해야 합니다. 우리 교육은 입시지옥, 대학 서열 체제, 공교육 황폐화라는 문제에 빠져 있습니다. ▲국 공립대 네트워크를 구축하고, ▲공영형 사립대학 체제를 구축해 교육의 상향 평준화를 기하고, ▲대학 등록금을 현재의 절반 수준으로 낮추어야 합니다.”`,
              where: `[발언] 대통령선거 출마 선언 中 발췌 (2017.1)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3416460&ref=A`,
                `http://blog.naver.com/jaemyunglee/220922551567`
              ],
            }, {
              summary: `“공영형 사립대학 체제 구축해야”`,
              description: `“교육 양극화가 소득 양극화로 연결되지 않도록 해야 합니다. 우리 교육은 입시지옥, 대학 서열 체제, 공교육 황폐화라는 문제에 빠져 있습니다. ▲국공립대 네트워크를 구축하고, ▲공영형 사립대학 체제를 구축해 교육의 상향 평준화를 기하고, ▲대학 등록금을 현재의 절반 수준으로 낮추어야 합니다.” [공영형 사립대학이란?] 사립대학은 국가의 대학 운영경비에 대한 보조도 없고, 법인 전입금도 거의 없기 때문에 대학 운영경비의 상당 부분을 학생 등록금에 의존하는 형태를 띤다. 교육의 질을 높이기 위해 이를 공공적 형태로 변화시키는 것이 정부 책임형(공영형) 사립대학이라 할 수 있다.`,
              where: `[발언] 대통령선거 출마 선언 中 발췌 (2017.1)`,
              links: [`http://www.kyosu.net/news/articleView.html?idxno=28886`,
                `http://news.kbs.co.kr/news/view.do?ncd=3416460&ref=A`,
                `http://blog.naver.com/jaemyunglee/220922551567`
              ],
            }, {
              summary: `“국공립대 네트워크 구축해야”`,
              description: `“교육 양극화가 소득 양극화로 연결되지 않도록 해야 합니다. 우리 교육은 입시지옥, 대학 서열 체제, 공교육 황폐화라는 문제에 빠져 있습니다. ▲국공립대 네트워크를 구축하고, ▲공영형 사립대학 체제를 구축해 교육의 상향 평준화를 기하고, ▲대학 등록금을 현재의 절반 수준으로 낮추어야 합니다.” [국공립대 네트워크란?] 서울대를 비롯한 전국 30개 국 공립대를 하나의 거대한 대학 체제로 묶어 공동 학위를 부여하는 제도다.`,
              where: `[발언] 대통령선거 출마 선언 中 발췌 (2017.1)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3416460&ref=A`,
                `http://blog.naver.com/jaemyunglee/220922551567`
              ],
            }, {
              summary: `“학자금 대출 이자, 성남시가 내준다”`,
              description: `대학생들의 학비 부담을 덜어주고 학업에 전념할 수 있도록 돕기 위한 학자금 대출 이자 지원 사업으로, 성남시는 지난 4년간 10억 7400만 원(2만 5891건)의 학자금 대출 이자를 지원했다.`,
              where: `[성남시 정책] 대학생 학자금 대출이자 지원 (2013~)`,
              links: [`http://www.joongboo.com/?mod=news&act=articleView&idxno=1109443`],
            }, ],
            rent: [{
              summary: `“부동산 보유세 폐지하고 국토 보유세 신설하겠다”`,
              description: `국내의 부동산 보유세는 선진국에 비해 낮은 수준으로, 연간 7조 원 정도(종합부동산세 2조 원, 재산세 7조 원)로 적은 편이다. 이에 부동산 보유세를 폐지하고 모든 개인이나 법인이 소유한 토지에서 세금을 걷는 형태인 국토 보유세를 제정하여 연간 15조 원을 모아 전 국민에게 매년 30만 원의 토지 배당(기본소득)을 주겠다.`,
              where: `[발언] 백범기념관 정책콘서트 中 (2017.01)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3413739&ref=A`,
                `http://factoll.com/page/news_view.php?Num=3912`
              ],
            }, {
              summary: `“’내 집 마련의 꿈’지원하는 주택 통장”`,
              description: `성남지역 저소득층의 주거복지 향상을 사업으로, 자활의지가 강한 차상위 근로자들의 자립 발판을 마련해주기 위해 성남시가 2011년부터 민간 후원금 29억 9400만 원으로 추진하는 사업이다. 성남지역 저소득 근로자 110명을 ‘성남형 주거복지 행복·드림통장 사업’ 대상으로 선정하여 매달 10만 원씩 3년간 저금하는 360만 원에 매달 10만 원씩 매칭 지원금이 적립돼 만기 후 720만 원 적립 원금과 이자를 주거 복지에 사용할 수 있도록 한다.`,
              where: `[성남시 정책] 주거복지 행복·드림통장 사업 (2016)`,
              links: [`http://www.asiae.co.kr/news/view.htm?idxno=2016060207132880487`],
            }, ],
            military: [{
              summary: `“선택적 모병제 도입 필요”`,
              description: `의무 복무병을 13만 명 줄여 복무 기간을 10개월로 단축하고, 전투전문 요원을 10만 명 모병해야 한다. 모병된 10만 명에 대해서는 1인당 3천만 원 정도의 연봉을 준다. 이를 위한 3조 원의 예산은 감군으로 생기는 절감액으로 충당할 수 있으며 "전투력은 올라가고 의무복무 기간까지 짧아지는 효과가 있다"고 말했다.`,
              where: `[발언] 국회 - '대한민국 적폐 청산과 공정국가 건설 토론회' 中 (2017.01)`,
              links: [`http://news.kbs.co.kr/news/view.do?ncd=3404878`],
            }, {
              summary: `“현대전에 능한 스마트 강군 10만 양성”`,
              description: `현대전은 사병 숫자가 아니라 무기의 첨단화와 그 첨단화된 무기체계를 능수능란하게 다룰 수 있는 훈련된 병사가 좌우하기 때문에, 첨단 무기를 운용하는 정예 전투 요원 10만 명을 모병하면 징집병 20만 명으로도 군 전력을 강화할 수 있다.`,
              where: `[발언] 공군 제3방공 유도탄 여단 예하 8630부대 방문 인터뷰 (2017.02)`,
              links: [
                `http://www.yonhapnews.co.kr/bulletin/2017/02/13/0200000000AKR20170213109100061.HTML?input=1195m`
              ],
            }],
            women: [{
              summary: `“출산 부부 10년간 저가 임대주택 제공”`,
              description: `“신생아를 출산하면 아주 저가에 10년 이상 임대주택을 공급하는 '아이사랑 주택' 공약을 준비하고 있다"고 밝혔다.`,
              where: `[공약] 워킹맘들과 간담회 中 '아이 키우기 좋은 대한민국' 5대 공약 발표 (2017.02)`,
              links: [
                `http://www.yonhapnews.co.kr/bulletin/2017/02/19/0200000000AKR20170219056100001.HTML?input=1195m`
              ],
            }, {
              summary: `“육아휴직 의무화 – 노동 경찰제 도입”`,
              description: `아이를 출산한 부모(남녀) 모두 육아휴직을 의무화하며, 육아휴직의 현실적 적용을 위해 아이를 키우는 부모 양측 모두 하루 8시간만 근무토록 하고 이를 감시·감독하는 '노동 경찰제' 도입하는 방안 등을 공약으로 내걸었다.노동 경찰제의 필요성에 대해서는 “근로시간이 잘 지켜지는지 등 노동법 관련 사항만 전담하는 노동 경찰이 필요하다"고 말했다.`,
              where: `[공약] 워킹맘들과 간담회 中 '아이 키우기 좋은 대한민국' 5대 공약 발표 (2017.02)`,
              links: [
                `http://www.yonhapnews.co.kr/bulletin/2017/02/19/0200000000AKR20170219056100001.HTML?input=1195m`
              ],
            }, {
              summary: `“공립 어린이집 이용률 50%로 확대”`,
              description: `누구나 어린이집을 이용할 수 있도록 공립 어린이집을 확대(이용률 11.4% → 50%) 하고 직장 어린이집 설치 감독을 강화해 설치율을 현행 53%에서 100%로 끌어올리겠다고 했다. 공공기관 직장 어린이집도 확대해 인근 직장 부모가 이용할 수 있도록 개방하겠다고도 약속했다.`,
              where: `[공약] 워킹맘들과 간담회 中 '아이 키우기 좋은 대한민국' 5대 공약 발표 (2017.02)`,
              links: [`http://www.newsis.com/view/?id=NISX20170219_0014714979&cID=10201&pID=10200`],
            }, {
              summary: `“누리과정 예산 전액 국고 부담”`,
              description: `보육의 질 향상을 위해 보육교사 처우를 개선하고 누리과정 예산을 전액 국고에서 부담하겠다고 말하며, ▲산후조리비 100만원 지원 ▲국민연금 출산 크레딧 첫째부터 적용 ▲육아휴직 급여 대체율 상향(현재 40% → 80%, 100만 원 상한 폐지) ▲18세 이하 입원 의료비 무상 지원 ▲고교 무상교육(2018년부터) ▲중고교 신입생 교복비 선물(1인당 29만 원) ▲아동과 청소년, 청년 배당(만 29세까지 연 100만 원) 등을 공약으로 제시했다.`,
              where: `[공약] 워킹맘들과 간담회 中 '아이 키우기 좋은 대한민국' 5대 공약 발표 (2017.02)`,
              links: [`http://www.newsis.com/view/?id=NISX20170219_0014714979&cID=10201&pID=10200`],
            }, {
              summary: `“’아이사랑 놀이터’로 공공 육아 실행”`,
              description: `성남시에는 장난감 도서관과 실내 놀이터를 합한 '아이사랑 놀이터'가 12곳, 65개의 국공립 어린이집, 학교 유휴공간을 이용해 맞벌이 가정 자녀를 돌보는 학교 내 시립 지역아동센터 등을 운영하며 공공 육아를 실현하고 있다.`,
              where: `[발언] 이재명의 SNS 게시글 中 (2017.02)`,
              links: [`https://www.facebook.com/jaemyunglee1/posts/1387254304649986:0`],
            }, {
              summary: `“무상 산후조리”`,
              description: `2018년까지 수정·중원·분당 등 3개구에 공공산후조리원을 설치하고 산모 1인당 2주간의 산후조리 서비스를 무상으로 제공하는 성남시 조례안이 제정됐다. 공공산후조리원을 이용하지 못할 경우 산모에게 1인당 50만 원의 조리비를 지원하고 매년 금액을 늘려 오는 2018년에는 최고 150만 원을 지원할 계획이다. 성남시는 이 조례가 시행되면 연간 7천여 명의 산모가 무상 산후조리 혜택을 누릴 것으로 예측했다.`,
              where: `[성남시 정책] 성남시 의회의 ‘무상 산후조리’ 조례안 (2015)`,
              links: [`http://news.kbs.co.kr/news/view.do?ref=A&ncd=3043493`],
            }, ],
          },
          ahn: {
            job: [{
              summary: `“교육 혁명과 공정한 산업구조 개혁 통해 민간 일자리 창출”`,
              description: `“4차 산업혁명 시대에는 인공지능, 로봇의 발전과 함께 지식정보산업과 관련된 일자리들이 늘어날 것이다. 정부는 이 시대를 대비한 교육혁명을 이뤄내고, 인재 양성과 과학기술혁명을 통한 기반기술 확보, 공정한 경쟁이 가능한 산업구조 개혁 등을 통해 양질의 일자리들을 만들어질 수 있다. 기업과 민간이 만드는 일자리 중심에 정부는 사회적 약자를 위한 일자리를 만드는 작업을 병행해야 한다.”`,
              where: ``,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3426611&ref=A`
              }
            }, {
              summary: `“혁신도시 공공기관 지역인재 채용 30% 법제화”`,
              description: `전주시는 혁신도시 조성의 취지를 살리기 위해 지역인재 의무 채용이 필요하다며 정부에 꾸준히 문제를 제기해왔는데, 이에 전북을 찾아 “지역인재 채용비율 30% 법제화에 찬성한다. 꼭 해야 한다”며, 혁신도시 공공기관 지역인재 채용 30% 법제화에 찬성 입장을 밝혔다. 이는 지난해 8월 국민의당이 당론채택에 이은 두번째 공식 발언이다.`,
              where: `[발언] 전북 기자협회 주최 대선주자 초청 토론회 中 (2017.02)`,
              links: {
                domin: `http://www.domin.co.kr/news/articleView.html?idxno=1141116`
              }
            }, {
              summary: `“중소기업 임금이 대기업의 80%수준 되도록 정부 한시적 지원”`,
              description: `중장기적으로는 산업구조를 바꿔야 하지만, 청년실업 문제가 가장 심각해질 것인 향후 3년 정도 동안은 중소기업의 임금 수준이 대기업의 75~80%가 되도록 정부가 한시적으로 지원해야 한다고 주장했다.`,
              where: `[발언] 동아일보와의 인터뷰(2017.02)`,
              links: {
                donga: `http://news.donga.com/Main/3/all/20170213/82834198/1`
              }
            }, {
              summary: `“엔젤 투자자와 벤처캐피털 활성화, 대표이사 연대보증 폐지 등을 추진하겠다”`,
              description: `실패해도 다시 도전하는 기업가는 결국 성공해, 처음에 한 실패보다 몇 배 더 큰 부가가치를 창출한다며 창업실패에 대한 부담을 덜어주는 대표이사연대보증 폐지 추진을 약속했다. 또한 엔젤 투자자와 벤처 캐피털 활성화 등과 같은 창업 장려 공약을 밝혔다.`,
              where: `[발언] 국회교섭단체대표연설 中 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3426611&ref=A`,
              }
            }],
            university: [{
              summary: `“5-2-2 학제 개편→대학 전 진로탐색 2년”`,
              description: `현행 ‘6년(초등학교)-3년(중학교)-3년(고등학교)’ 학제를 ‘5년(초등학교)-5년(중ㆍ고등 학교)-2년(진로탐색 또는 직업학교)’으로 개편한다. 개편된 학제에서는 중고등학교를 졸업한 이후 대학에 가려는 학생은 진로탐색 학교에 진학하고 직업학교에 진학한 학생은 일찌감치 직업훈련을 받고 직장에 다닌다. 보통교육과 대학교육을 분리해 창의교육을 가능하게 하고 사교육도 줄이겠다는 목적을 담고 있다.`,
              where: `[공약]  국회 교섭단체대표 연설 中 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3423382&ref=A`
              }
            }, {
              summary: `“교육부 폐지하고, 각 대학에 교육 자율성 부여”`,
              description: `“교육부를 해체하고, 중장기 교육정책을 수립할 국가교육위원회와 교육 업무 지원을 위한 교육 지원처 체제로 개편해야 한다. 초·중·고등학교 교육은 지방 교육청으로 권한을 이양하고, 대학교육은 각 대학에 자율성을 줘야 한다”`,
              where: `[발언] 교육문화체육관광위원회의 교육부 국정감사 中 (2016.09)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3352330`
              }
            }, {
              summary: `“전국 모든 대학에서 반값 등록금을 실현”`,
              description: `http://news.kbs.co.kr/news/view.do?ncd=3352330`,
              where: `[18대 대선 공약] 교육 공약 (2012)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=2561028`
              }
            }, ],
            rent: [{
              summary: `“국민연금으로 청년임대주택 짓겠다`,
              description: `국민의당 창당 1호 법안으로, 청년 세대의 주거문제를 지원하기 위해 국민연금을 재원으로 청년희망임대주택을 조성하는 내용을 담고 있다. 입주 자격은
    만 35세 이하 청년과 신혼부부이며, 임대 조건은 정부 정책금리를 초과할 수 없도록 했다.`,
              where: `[법안발의] 공공주택 특별법 (2016.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3230514&ref=A`
              }
            }, {
              summary: `“공공임대주택은 연 12만 호 공급한다”`,
              description: `2012년 18대 대선 후보 공약으로 공공임대주택을 2018년까지 연간 12만 호를 공급, 공공임대주택 거주
    가구 비율을 10%로 높인다는 내용을 담고 있다. 이를 위해 정부가 조성하는 공공택지에는 가능한 한 분양 전환되지 않는 공공임대주택과 토지 임대부 주택을 위주로 건설키로 했다.`,
              where: `[18대 대선
    공약] 주거안정대책 (2012)`,
              links: {}
            }, ],
            military: [{
              summary: `“군 복무 단축으로 국방력 유지 어려워”`,
              description: `“인구의 변화추세(저출산), 세계적인
    무기 발전상황, 여러 국제정세 등을 종합적으로 고려해 중장기적으로 군 병력에 대한 계획을 세워야 한다. 일부 대선주자들이 내세운 군복무기간 단축과 모병제 공약은 표를 의식한 포퓰리즘에 지나지 않는다.”`,
              where: `[발언] 용산의 합동참모본부를 방문 中 (2017.01)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3417959&ref=A`
              }
            }, {
              summary: `“한미동맹 굳건히…자강안보(自强安保)”`,
              description: `“굳건한 한미동맹을 근간으로 우리 스스로 지킬 수 있도록 국방력을 강화해야 한다. 미래지향적이고 호혜적으로 한미동맹을 발전시키고 더욱더 국방력을
    강화하는 데 많은 관심과 투자가 필요하며, 이를 '자강안보'라고 부르겠다"`,
              where: `[발언] 용산의 합동참모본부를 방문 中 (2017.01)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3417959&ref=A`
              }
            }, ],
            women: [{
              summary: `"국공립 어린이집 확충"`,
              description: `국공립어린이집 이용률을 30%로 올리고 보육예산 확보를 최우선으로 하겠다고 밝혔다.`,
              where: `[공약]
    국회 ‘성 평등 정책 중장기 비전수립을 위한 토론회’ 中 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3425865&ref=A`
              }
            }, {
              summary: `“일·가정 양립위해 성 평등 공시제도 도입”`,
              description: `40%에 달하는 성별 임금격차 해소를 위해 성 평등 공시제도를 통한 일·가정 양립 사회를 이루겠다고 주장했다. 성
    평등 공시제도란, 성별·고용형태별 임금, 실근로시간, 휴가·휴직 사용률 등을 투명하게 공개할 것을 의무화해 일·가정 양립을 가로막는 기업을 제재하는 제도다.`,
              where: `[공약] 국회 ‘성 평등 정책 중장기
    비전수립을 위한 토론회’ 中 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3425865&ref=A`,
                khan: `http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201702122244005&code=940100#csidx40dcfeb2549af13a4aa84c9a4d58a10`
              }
            }, {
              summary: `“돌봄할당제: 육아휴직 초기 3개월의 소득대체율을 100%로”`,
              description: `돌봄할당제는 육아휴직 초기 3개월의 소득대체율을 100%로 올리는 방안으로, 현재 ‘아빠의
    달’은 두 번째 배우자가 육아휴직을 사용할 경우 첫 3개월간 소득의 100%(150만 원 한도)를 제공하고 있다. 이 제도는 어머니의 육아휴직을 전제로 한 제도로 성평등한 부모 돌봄 참여를 막기에 초기 육아 3개월
    소득대체율을 높여야 한다고 밝혔다. 한편 육아휴직 기간 확대에는 부정적이다. 대신 육아휴직 급여의 소득대체율을 60%(200만 원 상한)로 올리고, 공보육 강화를 제안했다.`,
              where: `[공약] 국회 ‘성평등
    정책 중장기 비전수립을 위한 토론회’ 中 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3425865&ref=A`,
                khan: `http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201702122244005&code=940100#csidx6f18c3934685938bf86afb1fd1d8714`
              }
            }, ],
          },
          you: {
            job: [{
              summary: `“칼퇴근을 법으로 보장하겠다”`,
              description: `근로자에게 충분한 휴식과 재충전의 시간을 보장하기 위해 정시 퇴근을 보장하고 야근을 제한하는
    등의 주요 정책 방향을 담은 법안인 칼퇴근 보장 법을 제안했다. 법안의 세부내용으로는 ▲퇴근 후 SNS 등을 통해 업무지시를 하는 '돌발 노동'에 대한 초과근로시간 편입 및 이에 따른 할증임금 지불 ▲ 근로일
    사이 '최소 휴식시간'(퇴근 후 최소 11시간) 보장제 도입 ▲ 1년 단위 최대 근로시간 규정 도입 등의 구상이 포함됐다.`,
              where: `[공약] 바른정당 열린 정책 발표회 中 유승민 대선공약 2호 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3420970&ref=A`
              }
            }, {
              summary: `“고시촌을 실리콘밸리로”`,
              description: `노량진
    고시학원과 신림동 고시촌을 창업의 요람인 실리콘밸리가 되는 시대를 열어야 한다며, 사회적 안전판으로서의 '혁신 안전망' 구축이 무엇보다도 중요하다고 말했다. 창업자가 창업비용을 마련하기 위해 자신과 가족들의 자산을
    담보로 빚을 내는 '융자' 방식에서 벗어나 전문성 있는 투자자들로부터 유한 책임하에 투자를 받을 수 있도록 '투자' 중심의 환경을 만들겠다고 밝혔다.`,
              where: `[공약] 바른정당 열린 정책 발표회 中 유승민
    대선공약 1호 (2017.02)`,
              links: {}
            }, {
              summary: `“기업 비정규직 총량 제한”`,
              description: `비정규직 문제를 해결하고 ‘동일노동 동일임금’이라는 제언을 실현하기 위해
    기업이 고용할 수 있는 비정규직 노동자의 수를 제한하는 총량제 도입을 준비하고 있다고 밝혔다.`,
              where: `[발언] 유승민 캠프의 이종훈 전 의원과 경향신문의 인터뷰 中 (2017.02)`,
              links: {
                khan: `http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201702070600015&code=910100`
              }
            }, {
              summary: `“청년 창업
    지원 정책 펼치겠다”`,
              description: `일자리 정책으로 청년창업 지원정책을 전면에 내세우며, 창업 의욕을 꺾을 수 있는 연대 보증 제도를 없애고, 벤처기업이 우수 인재를 쉽게 영입하도록 5천만 원까지 스톡옵션을
    행사할 경우 비과세로 하고, 중소기업이 지식 재산권으로 돈을 벌면 감면 혜택을 주는 '특허 박스 제도'를 도입하기로 했다. 또한 사업 실패 원인이 비리와 무관할 경우 빠르게 재기할 수 있는 방안을 마련한다고 밝혔다.`,
              where: `[공약] 바른정당 열린 정책 발표회 中 대선공약 3호 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3426611&ref=A`
              }
            }, ],
            university: [{
              summary: `“대입제도 법제화로 안정성 높이겠다”`,
              description: `정권마다 바뀌는 대학입시 제도의 안정성을 높이도록 정권과 교육부 장관이 바뀌어도 대학
    입시제도를 쉽게 바꾸지 못하게 하는 제도인 ‘대입제도 법제화’를 주장했다. 이는 유승민의 대선 공약이자, 바른정당의 1호 법안이기도 하다.`,
              where: `[발언] '대학입시 제도 법제화' 주제 국회 토론회
    中 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3426667&ref=A`
              }
            }, {
              summary: `“자사고, 특목고 폐지…제2의
    고교평준화 개혁 필요”`,
              description: `과학고, 예술고, 체육고 등 존재 이유가 특별하게 인정되는 특목고는 존재하되 외고와 자사고는 폐지하는 것이 맞다. 제2의 고교평준화 개혁으로 일반고가 통합되고
    확대되면 공교육을 제대로 하도록 정책 에너지를 집중해야 한다`,
              where: `[발언] 국회 헌정기념관 기자회견 中`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3418426&ref=A`
              }
            }, ],
            rent: [{
              summary: `“소형 주택, 임대 주택 확대하겠다”`,
              description: `“전월세로 고통받는 서민, 젊은이들을 위해 소형 주택, 임대 주택을 획기적으로 늘리겠습니다”`,
              where: `[발언] 대선 출마 선언 기자회견 (2017.01)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3418620&ref=A`,
                khan: `http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201701261000001`,
              }
            }, ],
            military: [{
              summary: `“군 복무 기간 단축 못 하도록 병역법 고쳐야”`,
              description: `현행 21개월인 군 복무 기간이 1년으로 단축되면 병력 유지가 불가능하다며,
    “3개월씩. 6개월씩 복무 기간이 줄면 도저히 군대가 유지될 수 없다"라고 말했다. 대선후보들이 선거 때마다 복무 기간 단축을 공약으로 내거는 행태는 그만 두기를 제안한다며, 군 복무기간 1년 단축을 주장한 문재인
    후보를 비판하기도 했다.`,
              where: `[발언] 바른 정당 창당준비위 회의 中 (2017.01)`,
              links: {
                younhap: `http://www.yonhapnews.co.kr/bulletin/2017/01/20/0200000000AKR20170120039100001.HTML?input=1195m`
              }
            }, {
              summary: `“모병제는 시기 상조에 비현실적인 이야기”`,
              description: `“병사의 월급 금액에 상관없이 결국은 개인의 경제사회적인 조건이 나쁜 사람들만 군대를 가게 될 것이므로, 모병제는
    정의로운 제도가 될 수 없다. 저출산으로 인한 인구 절벽 문제점은 인정하면서도, 이를 보완하기 위해서는 유급 하사관제나 부사관 제도 등을 늘리면 된다.”`,
              where: `[발언] tbs 라디오 '색다른 시선
    김종배’ 인터뷰 中 (2017.01)`,
              links: {
                news1: `http://news1.kr/articles/?2897614`
              }
            }, ],
            women: [{
              summary: `“정부 차원의 부모보험 제도
    추진하겠다”`,
              description: `"고용 보험의 육아휴직 혜택을 못 받는 곳을 위해 부모보험을 만들어 국가가 상당 부분을 지원, 육아휴직수당을 지급하는 제도를 새로 도입하는 게 맞는다고 본다. 기존 고용보험은
    그대로 두되, 고용보험이 가입되지 않은 열악한 사업장을 위한 제도를 정부 차원에서 지원하겠다는 것이 부모 보험의 취지이다.”`,
              where: `[발언] IBK 기업은행 본사 방문 후 기자 간담회 中 (2017.02)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3422490&ref=A`
              }
            }, {
              summary: `“육아휴직, 3년간 3회에 걸쳐 사용 확대하겠다”`,
              description: `민간 기업 근로자들의 육아휴직을 공공부문 근로자들처럼 최장 3년 보장하며, 사용 횟수도 최대 3회까지 나눠 자유롭게 사용할 수 있도록 하는 내용을 담았다.`,
              where: `[법안 발의] 육아휴직 3년 법 (남녀
    고용 평등과 일·가정 양립 지원법) (2017.01)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3422490&ref=A`
              }
            }, {
              summary: `“육아휴직 수당 급여율 60%로 확대”`,
              description: `육아휴직 급여를 현실화하기 위해 현행 휴직수당 상한선을 100만 원에서 200만 원으로 높이고, 통상임금의 40%를 주게 돼 있는 육아휴직
    수당 급여율도 60%로 상향 조정했다. 다만 기업에서 육아휴직을 쓰지 못하게 할 경우의 처벌 조항은 현실과 괴리가 커진다는 이유로 포함하지 않았다.`,
              where: `[법안 발의] 육아휴직 3년 법 (남녀 고용
    평등과 일·가정 양립 지원법) (2017.01)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3410994&ref=A`
              }
            }, {
              summary: `“만
    18세까지 육아휴직 적용 확대”`,
              description: `'만 8세 또는 초등학교 2학년 이하'의 자녀로만 한정됐던 기존 육아휴직제 적용 대상을 '만 18세 또는 고등학교 3학년 이하'로 넓혔다. 육아휴직을
    3차례까지 나눠 쓸 수 있기 때문에, 자녀의 성장 단계에 맞춰 탄력적으로 휴직을 사용할 수 있다.`,
              where: `[법안 발의] 육아휴직 3년 법 (남녀 고용 평등과 일·가정 양립 지원법) (2017.01)`,
              links: {
                kbs: `http://news.kbs.co.kr/news/view.do?ncd=3410994&ref=A`
              }
            }, ]
          }
        },
        buttonTexts: {
          all: '모두보기',
          job: '일자리',
          university: '대학/등록금',
          rent: '주거',
          military: '군대',
          women: '결혼/출산/육아',
        }
      }
    },
    components: {
      Card
    }
  }
</script>
<style lang="scss">
  @import url(https://cdn.rawgit.com/theeluwin/NotoSansKR-Hestia/master/stylesheets/NotoSansKR-Hestia.css);
  .logo {
    position: fixed;
    width: 85px;
    height: 85px;
    margin: 1em;
    z-index: 100;
  }

  #backmoon {
    background-image: url('/src/assets/img/backmoon-s.png');
    background-repeat: no-repeat;
    position: relative;
    width: 100vw;
    height: 464px;
  }

  #backjung {
    background-image: url('/src/assets/img/backjung-s.png');
    background-repeat: no-repeat;
    position: relative;
    width: 100vw;
    height: 464px;
  }

  #backyou {
    background-image: url('/src/assets/img/backyou-s.png');
    background-repeat: no-repeat;
    position: relative;
    width: 100vw;
    height: 464px;
  }

  #backsim {
    background-image: url('/src/assets/img/backsim-s.png');
    background-repeat: no-repeat;
    position: relative;
    width: 100vw;
    height: 464px;
  }

  #backnam {
    background-image: url('/src/assets/img/backnam-s.png');
    background-repeat: no-repeat;
    position: relative;
    width: 100vw;
    height: 464px;
  }

  #backlee {
    background-image: url('/src/assets/img/backlee-s.png');
    background-repeat: no-repeat;
    position: relative;
    width: 100vw;
    height: 464px;
  }

  #backahn {
    background-image: url('/src/assets/img/backahn-s.png');
    background-repeat: no-repeat;
    position: relative;
    width: 100vw;
    height: 464px;
  }

  .top-text {
    margin-bottom: 0.5em;
    background-color: #FFC03B;
    padding: 0.2em;
    font-family: 'Noto Sans Korean';
    position: absolute;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    bottom: 3.5em;
    left: 1em;
  }

  .bottom-text {
    background-color: #FFC03B;
    padding: 0.2em;
    font-family: 'Noto Sans Korean';
    position: absolute;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    bottom: 2em;
    left: 1em;
  }

  @media screen and (min-width: 45em) {
    .policys {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
    .logo {
      background-image: url('/src/assets/img/logo-l.png');
      width: 127px;
      height: 127px;
    }
    .top-text {
      margin-bottom: 1em;
      padding: 0.2em;
      font-size: 2.5em;
      left: auto;
      right: 1em;
      bottom: 3em;
    }
    .bottom-text {
      padding: 0.2em;
      left: auto;
      font-size: 2.5em;
      right: 1em;
      bottom: 2em;
    }
    .top {
      width: 100vw;
      height: 541px;
    }
    #backmoon {
      background-image: url('/src/assets/img/backmoon-l.png');
      background-repeat: no-repeat;
      position: relative;
      width: 100vw;
      height: 464px;
    }
    #backjung {
      background-image: url('/src/assets/img/backjung-l.png');
      background-repeat: no-repeat;
      position: relative;
      width: 100vw;
      height: 464px;
    }
    #backyou {
      background-image: url('/src/assets/img/backyou-l.png');
      background-repeat: no-repeat;
      position: relative;
      width: 100vw;
      height: 464px;
    }
    #backsim {
      background-image: url('/src/assets/img/backsim-l.png');
      background-repeat: no-repeat;
      position: relative;
      width: 100vw;
      height: 464px;
    }
    #backnam {
      background-image: url('/src/assets/img/backnam-l.png');
      background-repeat: no-repeat;
      position: relative;
      width: 100vw;
      height: 464px;
    }
    #backlee {
      background-image: url('/src/assets/img/backlee-l.png');
      background-repeat: no-repeat;
      position: relative;
      width: 100vw;
      height: 464px;
    }
    #backahn {
      background-image: url('/src/assets/img/backahn-l.png');
      background-repeat: no-repeat;
      position: relative;
      width: 100vw;
      height: 464px;
    }
  }

  .policys {
    padding: 10px;
  }

  .button {
    text-decoration: none;
    font-size: 15px;
    padding-right: 1.5em;
    padding-left: 1.5em;
    padding-top: .5em;
    padding-bottom: .5em;
    margin: 0.2em;
    display: inline-block;
    color: white;
    background-color: #C3C3C3;
    border-radius: 1rem;
  }

  .button:hover {
    cursor: pointer;
    background-color: #FFC03B;
    transition: color .25s, ease-in
  }

  .active-button {
    background-color: #FFC03B;
  }

  .background {
    background-color: white;
    background-image: linear-gradient(#269 1px, transparent 1px), linear-gradient(90deg, #269 1px, transparent 1px);
    background-size: 25px 25px, 25px 25px;
    min-height: 100vh;
  }
</style>