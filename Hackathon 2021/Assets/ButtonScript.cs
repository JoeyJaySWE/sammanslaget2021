using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class ButtonScript : MonoBehaviour
{
    public GameObject[] knappar;
    int index;


    private void Awake()
    {
        index = 0;
    }

    void Start()
    {
        TurnOffAllButtons();
        TurnOnNextButton(0);
    }

    private void Update()
    {
        if (Input.GetKeyDown("space"))
        {
            Debug.Log(index);
            Debug.Log(knappar[index].name);
        }
    }

    void TurnOffAllButtons()
    {
        for (int i = 0; i < knappar.Length; i++)
        {
            knappar[i].SetActive(false);
        }
    }

    public void SwitchButtons()
    {
        Debug.Log(index);
        Debug.Log(knappar[index].name);

        TurnOffButton(index);
        index++;

        if (index >= knappar.Length)
        {
            return;
        }

        StartCoroutine(DelayFunction(2f));

        Debug.Log(index);
        Debug.Log(knappar[index].name);
    }

    public IEnumerator DelayFunction(float delayTime)
    {
        yield return new WaitForSeconds(delayTime);

        TurnOnNextButton(index);
    }


    public void TurnOffButton(int privateIndex)
    {
        knappar[privateIndex].SetActive(false);
    }

    public void TurnOnNextButton(int privateIndex)
    {
        knappar[privateIndex].SetActive(true);
    }
}
