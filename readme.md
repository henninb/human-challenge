https://henninb.github.io/human-challenge/index.html

az network front-door rules engine-config create --name HSFirstPartyHeaders --front-door-name bh-front-door --resource-group brians-resouce-group --rules-engine "{ \"rules\": [ { \"name\": \"MyRule\", \"matchConditions\": [], \"actions\": [] } ] }"
az network front-door rules engine-config create --name HSFirstPartyHeaders --front-door-name bh-front-door --resource-group brians-resouce-group --rules-engine '{ "rules": [ { "name": "MyRule", "matchConditions": [], "actions": [] } ] }'

az afd profile list --output table

az afd rule-set create -g centralUSResourceGroup --rule-set-name ruleset1 --profile-name bh-front-door

az afd rule-set list -g centralUSResourceGroup --profile-name bh-front-door --output table

# --probe-request-type GET --probe-protocol Http --probe-interval-in-seconds 120 --probe-path /test1/azure.txt --sample-size 4 --successful-samples-required 3 --additional-latency-in-milliseconds 50

az afd origin-group create \
    --resource-group centralUSResourceGroup --origin-group-name origin-group1 --profile-name bh-front-door \


az afd rule create \
    --resource-group centralUSResourceGroup --rule-set-name ruleset1  --profile-name bh-front-door \
    --order 1 \
    --match-variable UrlPath \
    --operator BeginsWith \
    --match-values '/APPID_NO_PX/' \
    --rule-name HSFirstPartyHeaders \
    --action-name ModifyRequestHeader \
    --header-action Append \
    --header-name 'x-px-first-party' \
    --header-value '1' \
    --match-processing-behavior Continue

az afd rule action add \
    --resource-group centralUSResourceGroup --rule-set-name ruleset1  --profile-name bh-front-door \
    --rule-name HSFirstPartyHeaders \
    --action-name ModifyRequestHeader \
    --header-action Append \
    --header-name 'x-px-enforcer-true-ip' \
    --header-value '{client_ip}'

az afd rule create \
    --resource-group centralUSResourceGroup --rule-set-name ruleset1  --profile-name bh-front-door \
    --order 2 \
    --match-variable UrlPath \
    --operator BeginsWith \
    --match-values '/APPID_NO_PX/init.js' \
    --rule-name HSFirstPartyClient \
    --action-name UrlRewrite \
    --source-pattern '/APPID_NO_PX/init.js' \
    --destination '/APPID_NO_PX/main.min.js' \
    --preserve-unmatched-path No \
    --match-processing-behavior Stop

az afd rule action add \
    --resource-group centralUSResourceGroup --rule-set-name ruleset1  --profile-name bh-front-door \
    --rule-name HSFirstPartyClient \
    --action-name RouteConfigurationOverride \
    --origin-group HSClient \
    --forwarding-protocol MatchRequest


az afd rule create \
    --resource-group centralUSResourceGroup --rule-set-name ruleset1  --profile-name bh-front-door \
    --order 3 \
    --match-variable UrlPath \
    --operator BeginsWith \
    --match-values '/APPID_NO_PX/captcha' \
    --rule-name HSFirstPartyCaptcha \
    --action-name UrlRewrite \
    --source-pattern '/APPID_NO_PX/captcha' \
    --destination '/APPID/' \
    --preserve-unmatched-path Yes \
    --match-processing-behavior Stop

az afd rule action add \
    --resource-group centralUSResourceGroup --rule-set-name ruleset1  --profile-name bh-front-door \
    --rule-name HSFirstPartyCaptcha \
    --action-name RouteConfigurationOverride \
    --origin-group HSFirstPartyCaptcha \
    --forwarding-protocol MatchRequest



az afd endpoint list --profile-name bh-front-door --resource-group centralUSResourceGroup --output table
