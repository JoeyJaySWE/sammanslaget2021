using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonScriptWithList : MonoBehaviour
{
    int index;
    static List<GameObject> knappar;


    private void Awake()
    {
        knappar = new List<GameObject>();
        index = 0;
    }

    void Start()
    {
        knappar.AddRange(GameObject.FindGameObjectsWithTag("Knappar"));

        for (int i = 0; i < knappar.Count; i++)
        {
            Debug.Log(knappar[i]);
        }

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
        for (int i = 0; i < knappar.Count; i++)
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

        if (index >= knappar.Count)
        {
            return;
        }

        TurnOnNextButton(index);

        Debug.Log(index);
        Debug.Log(knappar[index].name);
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
